import axios from 'axios';
import { getData, getStoredBusiness, storeData } from './Method';
import moment from "moment";
import { useQuery, useMutation } from 'react-query';


// export const base_Url = 'https://swapi.dev/api/';

export const base_Url = 'https://coolowo.com';




export const APIFunction = {


    get_users: async (page = 1, search) => {
        let user = await getData("user");
        const business_id = user?.employee_user_memberships?.[0]?.business_id
        return getAPI(`/c/${business_id}/employees/?page=${page}&search=${search}`)
    },
    get_outs: async (category = '') => {
        let user = await getData("user");
        let business_id = user?.employee_user_memberships?.[0]?.business_id

        return getAPI(`/c/${business_id}/timeoff_taken/widgets/whos_out/?category=${category}`)
    },

    get_benefits: async () => {
        let user = await getData("user");
        let business_id = user?.employee_user_memberships?.[0]?.business_id
        var about_me = await getData("about_me")
        let biz = user.employee_user_memberships &&
            Array.isArray(user.employee_user_memberships) && user.employee_user_memberships[0]
            && user.employee_user_memberships[0].business_id ? user.employee_user_memberships[0] : null;
        let employee_pk = (biz.business_id, about_me.id)
        return getAPI(`/c/${business_id}/employees/${employee_pk}/benefits/`)
    },
    get_assets: async () => {
        const user = await getData('user');
        const business_id = user?.employee_user_memberships?.[0]?.business_id
        let about_me = await getData("about_me")
        let biz = user.employee_user_memberships &&
            Array.isArray(user.employee_user_memberships) && user.employee_user_memberships[0]
            && user.employee_user_memberships[0].business_id ? user.employee_user_memberships[0] : null;
        let employee_pk = (biz.business_id, about_me.id)
        console.log('epk', employee_pk)
        return getAPI(`/c/${business_id}/employees/${employee_pk}/asset_vehicles/`)
    },

    get_teams: async (page) => {
        const user = await getData('user')
        const business_id = user?.employee_user_memberships?.[0]?.business_id

        const about_me = await getData("about_me")
        // console.log('first', about_me)
        const id = about_me?.employee_id
        // console.log('id-->>>', id)
        return getAPI(`/c/${business_id}/employees/${id}/team_members/?page=${page}`)
    },
    login: async (fd) => {

        const userInfo = await postNoToken('/accounts/auth/employees/login/', fd)
        const employees_me = (business_id) => `/c/${business_id}/employees/me/`;

        let token = userInfo.access_token ? userInfo.access_token : null;
        await storeData("token", token)
        // console.log("postNoToken-res", userInfo, token)
        let refresh = userInfo.refresh_token ? userInfo.refresh_token : null;
        let business = userInfo.user.employee_user_memberships &&
            Array.isArray(userInfo.user.employee_user_memberships) &&
            userInfo.user.employee_user_memberships.length > 0 ?
            userInfo.user.employee_user_memberships[0] : null;

        if (!business) return ToastError("No business connected to this account");
        let employees_me_url = employees_me(business.business_id);
        let about_me = await getAPI(employees_me_url, token);
        // console.log('>>>>>>>', about_me)
        await storeData("refresh", refresh);
        await storeData("about_me", about_me)
        await storeData("user", userInfo.user);
        return postNoToken('/accounts/auth/employees/login/', fd)
    }
}

export const getAPI = async (path) => {


    let _token = await getData("token");
    console.log("PATH", path)
    return new Promise((resolve, reject) => {

        axios
            .get(`${base_Url}${path}`, {
                headers: {
                    Authorization: `Bearer ${_token}`,
                    'Cache-Control': 'no-cache, no-store, must-revalidate',
                    'Pragma': 'no-cache',
                    'Expires': 0
                },
            })
            .then(result => {
                // console.log("RESULT", result)
                resolve(result.data);
            })
            .catch(error => {
                if (error.response) {
                    reject({ status: 400, msg: error.response.data });
                } else {
                    reject({ status: 400, msg: 'Something went wrong. Please retry.' });
                }
            });

    });
};
export const postNoToken = (path, fd) => {
    console.log("PATH", path)
    return new Promise((resolve, reject) => {
        axios
            .post(`${base_Url}${path}`, fd, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(result => {
                resolve(result.data);
            })
            .catch(error => {
                if (error.response) {
                    reject({ status: 400, msg: error.response.data });
                } else {
                    reject({ status: 400, msg: 'Something went wrong. Please retry.' });
                }
            });

        setTimeout(() => reject({ status: 500, msg: 'Something went wrong. Please retry.' }), 50000);
    });
};



export const postAPIs = async (path, fd) => {
    let expiry = await getData("token_expiry");
    if (expiry && !moment(new Date()).isBefore(expiry)) {
        await refreshToken()
    }
    let _token = await getData("token");
    return new Promise((resolve, reject) => {
        axios({
            url: `${endPoint}${path}`,
            method: 'post',
            data: fd,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${_token}`,
            },
        })
            .then(result => {
                resolve(result.data);
            })
            .catch(error => {
                if (
                    error.response && error.response.data &&
                    error.response.data.detail && typeof (error.response.data.detail) === "string"
                ) {
                    reject({ status: 400, msg: error.response.data.detail });
                } else {
                    reject({ status: 500, msg: 'Something went wrong. Please retry.' });
                }
            });

        // setTimeout(() => reject({ status: 500, msg: 'Something went wrong. Please retry.' }), 10000);
    });
};

export const deleteAPIs = async (path, fd) => {
    let expiry = await getData("token_expiry");
    if (expiry && !moment(new Date()).isBefore(expiry)) {
        await refreshToken()
    }
    let _token = await getData("token");
    return new Promise((resolve, reject) => {
        axios.delete(
            `${endPoint}${path}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${_token}`
                }
            }
        )
            .then(result => {
                resolve(result.data);
            })
            .catch(error => {
                if (
                    error.response && error.response.data &&
                    error.response.data.detail && typeof (error.response.data.detail) === "string"
                ) {
                    reject({ status: 400, msg: error.response.data.detail });
                } else {
                    reject({ status: 500, msg: 'Something went wrong. Please retry.' });
                }
            });

        setTimeout(() => reject({ status: 500, msg: 'Something went wrong. Please retry.' }), 50000);
    });
};

export const editApi = async (path, fd) => {
    let expiry = await getData("token_expiry");
    if (expiry && !moment(new Date()).isBefore(expiry)) {
        await refreshToken()
    }
    let _token = await getData("token");
    return new Promise((resolve, reject) => {
        axios({
            url: `${endPoint}${path}`,
            method: 'put',
            data: fd,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${_token}`,
            },
        })
            .then(result => {
                resolve(result.data);
            })
            .catch(error => {
                console.log("---ERROR--", error.response)
                if (
                    error.response && error.response.data && error.response.data.msg &&
                    error.response.data.msg.detail && typeof (error.response.data.msg.detail) === "string"
                ) {
                    reject({ status: 400, msg: error.response.data.msg.detail });
                } else {
                    reject({ status: 500, msg: 'Something went wrong. Please retry.' });
                }
            });

        setTimeout(() => reject({ status: 500, msg: 'Something went wrong. Please retry.' }), 50000);
    });
};



export const storedData = async (path, token, fd) => {
    let expiry = await getData("token_expiry");
    if (token && expiry && !moment(new Date()).isBefore(expiry)) {
        await refreshToken()
    }
    let _token = await getData("token");
    return new Promise((resolve, reject) => {
        axios({
            url: `${endPoint}${path}`,
            method: 'POST',
            data: fd,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${_token}`,
            },
        })
            .then(res => {
                resolve(res.data);
            })
            .catch(error => {
                //logError(endPoint,path,error)
                if (error.response) {
                    reject({ status: 500, msg: error.response.data });
                } else {
                    reject({ status: 500, msg: 'Something went wrong. Please retry.' });
                }
            });
    });
};

export const EditedData = async (path, token, fd) => {
    let expiry = await getData("token_expiry");
    if (token && expiry && !moment(new Date()).isBefore(expiry)) {
        await refreshToken()
    }
    let _token = await getData("token");
    return new Promise((resolve, reject) => {
        axios({
            url: `${endPoint}${path}`,
            method: 'put',
            data: fd,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${_token}`,
            },
        })
            .then(res => {
                resolve(res.data);
            })
            .catch(error => {
                if (error.response) {
                    reject({ status: 500, msg: error.response.data });
                } else {
                    reject({ status: 500, msg: 'Something went wrong. Please retry.' });
                }
            });

        //setTimeout(() => reject({status: 500, msg: 'Something went wrong. Please retry.'}), 50000);
    });
};

export const loginUser = () => {
    return useMutation(APIFunction.login)
}