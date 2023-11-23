import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";

import ClientLayout from "./src/layouts/ClientLayout";
import ClientProvider from "./src/contexts/ClientContext";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />

            <ClientProvider>
                <ClientLayout />
            </ClientProvider>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
