

export const useFetchUsers = (filters) => {
    return useQuery(
        ["users", filters],
        () => fetchUsers(filters)
    )
}