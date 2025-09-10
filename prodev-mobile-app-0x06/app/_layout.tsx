import { AntDesign, MaterialIcons, Octicons  } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const HomeRootLayout = () => {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: '#34967C',
            headerShown: false
        }}>
            <Tabs.Screen name="index" options={{
                title: 'Home',
                tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />,
             }} />             
             <Tabs.Screen name="join" options={{
                title: 'Join',
                headerShown: false,
                tabBarIcon: ({ color }) => <MaterialIcons name="create" size={24} color={color} />,
            }} />
            <Tabs.Screen name="signin" options={{
                title: 'Signin',
                headerShown: false,
                tabBarIcon: ({ color }) => <Octicons name="sign-in" size={27} color={color} />
            }} />
        </Tabs>
    )
}

export default HomeRootLayout;