import React, { useEffect, useState } from 'react'
import { FlatList, Image, Platform, ScrollView, SectionList, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native'
import { totalSize, width, height } from 'react-native-dimension'
import { useDispatch, useSelector } from 'react-redux'
import { globalStyles } from '../styles/global';
import { categoryIcon1, downIcon, filterIcon, leftIcon, listingIcon } from '../assets/images'
import SearchBox from './SearchBox';
import { Container, EmptyStateWrapper, H1, LottieIcon, PageLoader, Rounded } from '../utils/MyComponent'
import { FilterModal } from './ContactModal'
import PeopleCard from './PeopleCard'
import CommonStyles from '../styles/CommonStyles';
import TeamCard from './TeamCard'
import { useQuery, useInfiniteQuery } from 'react-query'
import { APIFunction } from '../utils/MyApi'
import { storeData } from './../utils/Method';
import ScreenWrap from './ScreenWrap';
import { Images } from './../utils/Images';


const PeopleTab = ({ navigation, route }) => {
  var [tab, setTab] = useState('All');
  const [ListView, setListView] = useState(false);
  const [modal, setModal] = useState(false);
  const [page, setPage] = useState(1)
  const [id, setId] = useState(false)
  const [search, setSearch] = useState('')






  // const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useInfiniteQuery('people', () => APIFunction.get_users(page, search), {

  //   getNextPageParam: (lastPage, allPages) => {
  //     // const maxPage = lastPage.total_count / 10;
  //     // const nextPage = allPages + 1;
  //     return lastPage.next
  //   }
  // }
  // )
  // console.log('infinite scroll', data);


  // const loadMore = () => {
  //   if (hasNextPage) {
  //     fetchNextPage();
  //   }
  // };

  const { data, status } = useQuery(['persons', { page, search }], () => APIFunction.get_users(page, search),
    {
      enabled: tab === "All" ? true : false

    },

  )

  console.log('first', data)

  const { data: result, isError, isSuccess } = useQuery(['person', page, id], () => APIFunction.get_teams(page, id),
    {
      enabled: tab === "My Team" ? true : false,


    }
  )
  // console.log('End point Team-->>>', result, isError, isSuccess)

  const EmptyListMessage = ({ item }) => {
    return (
      // Flat List Item
      <Text style={globalStyles.emptyListStyle} >
        No Data Found
      </Text>
    );
  };


  const handleSearch = (text) => {
    if (text > 0) {

    }

  }


  // useEffect(() => {
  //   let fetching = false;

  // }, [])


  return (

    <ScreenWrap>
      <View style={globalStyles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={CommonStyles.paddingLeft_1}>
          <Image resizeMode="contain" source={leftIcon} style={globalStyles.leftIcon1} />
        </TouchableOpacity>
        <Text numberOfLines={1} style={globalStyles.screenTitle}>
          People
        </Text>
        <TouchableOpacity
          onPress={() => setListView(!ListView)}
        >
          {ListView ? <Image resizeMode="contain" source={categoryIcon1} style={globalStyles.rightIcon} /> :
            <Image resizeMode="contain" source={listingIcon} style={globalStyles.rightIcon} />
          }


        </TouchableOpacity>
      </View>


      <View style={globalStyles.line} />
      <View style={globalStyles.mainViewContainer}>

        <ScrollView
          nestedScrollEnabled={true}
          contentContainerStyle={globalStyles.scrollViewContainer}
          showsHorizontalScrollIndicator={false}
          horizontal={true}>
          {['All', 'My Team', "Who's out", 'Celebrations'].map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setTab(item)
              }}
            >
              <Text style={[globalStyles.heading, tab == item && globalStyles.selectedHeading]}>{item}</Text>
              {tab == item && <View style={globalStyles.animated} />}
            </TouchableOpacity>
          ))}

        </ScrollView>


        {tab === "All" && Platform.OS === "android" ? (

          <View style={[globalStyles.searchBoxContainer,]} >
            <SearchBox
              title="Search for a Team"
              containerStyle={globalStyles.searchBoxStyle}
              onSubmitEditing={handleSearch}
            />


          </View>
        ) : null

        }

      </View>

      {
        status === 'loading' ? <PageLoader /> : null
      }
      {
        (
          (tab === "All" || tab === "My Team") && data.results && Array.isArray(data.results) &&
          data.results.length === 0 && !status === 'loading'
        ) ? (
          <EmptyStateWrapper
            icon={Images.EmptyTeams}
            header_1={"You have no team"}
            header_2={"member yet."}
            sub_text={"When you do, they will show up here."}
          />
        ) : null
      }



      <View style={globalStyles.scrolls}>



        {
          !ListView ? (
            <FlatList
              data={tab === 'My Team' || tab === 'All' && data?.results && Array.isArray(data?.results) ? data.results : tab === "All" && result?.results && Array.isArray(result?.results) ? result.results : []}
              columnWrapperStyle={{ justifyContent: 'space-between', width: width(90), }}
              numColumns={2}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => <TeamCard item={item} onPressHandle={async () => {
                console.log(' clicked')
                await storeData("tmember", item)
                navigation.navigate('Details')
              }} />}
              contentContainerStyle={[CommonStyles.marginTop_3, { paddingBottom: height(40) }]}
              ItemSeparatorComponent={() => <View style={[CommonStyles.marginTop_2]} />}
              showsVerticalScrollIndicator={false}
              nestedScrollEnabled={true}


            />
          ) : null
        }


        {
          ListView ? (
            <FlatList
              data={tab === 'All' || tab === 'My Team' && data?.results && Array.isArray(data?.results) ? data.results : tab === "My Team" && result?.results && Array.isArray(result?.results) ? result.results : []}
              renderItem={({ item }) => <PeopleCard item={item} />}
              ItemSeparatorComponent={() => <View style={globalStyles.line} />}
              ListEmptyComponent={EmptyListMessage}
              showsVerticalScrollIndicator={false}
              nestedScrollEnabled={true}
              contentContainerStyle={[CommonStyles.marginTop_1, { paddingBottom: height(60) }]}
              onEndReachedThreshold={0.3}


            />
          ) : null
        }


      </View>
    </ScreenWrap>
  )
}

export default PeopleTab;


