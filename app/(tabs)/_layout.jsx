import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function Layout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="CrearOrc"
        options={{
          title: 'Espacio De Oracion',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          
        }}
       
      />
      <Tabs.Screen
        name="MisOraciones"
        options={{
          title: 'Mis Oraciones',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Perfil"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
