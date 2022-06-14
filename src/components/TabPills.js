import React, { useEffect, useState } from 'react'
import { FlatList, Image, Platform, ScrollView, SectionList, Text, TouchableOpacity, View } from 'react-native'
import { totalSize, width } from 'react-native-dimension'
import { useDispatch, useSelector } from 'react-redux'
import AppColors from '../styles/AppColors'
import { globalStyles } from '../styles/global';
import { categoryIcon1, downIcon, filterIcon, leftIcon, listingIcon } from '../assets/images'
import SearchBox from './SearchBox';
import { Container, H1, LottieIcon, PageLoader, Rounded } from '../utils/MyComponent'
import { FilterModal } from '../components/ContactModal'
import moment from 'moment'
import PeopleCard from './PeopleCard'
import CommonStyles from './../styles/CommonStyles';
import TeamCard from './TeamCard'
import ScreensContainer from './ScreensContainer';
import People from './../screens/People';

const TabPills = ({ navigation, route }) => {
  var [getSelected, setGetSelected] = useState('All');
  const [ListView, setListView] = useState(false);
  const [modal, setModal] = useState(false);


  return (

    <Container>
      <View style={globalStyles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image resizeMode="contain" source={leftIcon} style={globalStyles.leftIcon} />
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
                setGetSelected(item)
              }}
            >
              <Text style={[globalStyles.heading, getSelected == item && globalStyles.selectedHeading]}>{item}</Text>
              {getSelected == item && <View style={globalStyles.animated} />}
            </TouchableOpacity>
          ))}

        </ScrollView>


        {getSelected === "All" && Platform.OS === "android" ? (

          <View style={[globalStyles.searchBoxContainer, { marginBottom: 15 }]} >
            <SearchBox
              title="Search for Name "
              containerStyle={globalStyles.searchBoxStyle}
              onSubmitEditing={(console.log('heloo'))}
            />
            <TouchableOpacity style={globalStyles.filterIconContainer} onPress={() => setModal(!modal)}>
              <Image resizeMode="contain" source={filterIcon} style={globalStyles.filterIcon} />
            </TouchableOpacity>


          </View>
        ) : null

        }

      </View>

      {
        getSelected === "All" ? (<FlatList
          data={Array.from({ length: 30 })}
          renderItem={() => <TouchableOpacity
            onPress={() => {
              navigation.navigate("Details");
            }}
          >
            {
              getSelected == 'All' ? <PeopleCard /> : null

            }
          </TouchableOpacity>}
        />

        ) : null
      }

      {
        getSelected === "All" || " My Team" ? (
          <FlatList
            data={Array.from({ length: 6 })}
            numColumns={2}
            renderItem={() => <TouchableOpacity
              onPress={() => {
                navigation.navigate("Details");
              }}
            >
              {
                getSelected == 'My Team' ? <TeamCard /> : null

              }
            </TouchableOpacity>}
          />) : null
      }

    </Container>
  )
}

export default TabPills;


