import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './../screens/homeScreen';
import MessagesScreen from './../screens/messagesScreen';
import NotesScreen from './../screens/notesScreen';
import CalendarScreen from './../screens/calendarScreen';
import SettingsScreen from './../screens/settingsScreen';

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Messages: MessagesScreen,
  Notes: NotesScreen,
  Calendar: CalendarScreen,
  Settings: SettingsScreen
});


export default createAppContainer(TabNavigator);
