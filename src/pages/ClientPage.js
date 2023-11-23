import { useContext, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import ModalClientCreate from "../components/ModalClientCreate";
import { ClientContext } from "../contexts/ClientContext";

export default function ClientPage() {
    const { showModalClientCreate, setShowModalClientCreate } =
        useContext(ClientContext);

    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <Text style={styles.navbarTitle}>Lista de Clientes:</Text>

                <TouchableOpacity
                    style={styles.navbarButton}
                    onPress={() =>
                        setShowModalClientCreate(true)
                    }
                >
                    <Text style={styles.navbarButtonText}>Novo Cliente</Text>
                </TouchableOpacity>
            </View>

            <ModalClientCreate />

            <View style={styles.table}>
                <View style={styles.tableHead}>
                    <Text
                        style={{
                            ...styles.tableHeadText,
                            paddingLeft: 10,
                            width: Dimensions.get("window").width * 0.2,
                        }}
                    >
                        #
                    </Text>
                    <Text
                        style={{
                            ...styles.tableHeadText,
                            width: Dimensions.get("window").width * 0.5,
                        }}
                    >
                        Nome
                    </Text>
                    <Text
                        style={{
                            ...styles.tableHeadText,
                            paddingRight: 10,
                            width: Dimensions.get("window").width * 0.3,
                        }}
                    >
                        Ações
                    </Text>
                </View>

                <View
                    style={{
                        ...styles.tableHead,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            paddingLeft: 10,
                            width: Dimensions.get("window").width * 0.2,
                        }}
                    >
                        1
                    </Text>

                    <Text
                        style={{
                            width: Dimensions.get("window").width * 0.3,
                        }}
                    >
                        Gabriel
                    </Text>

                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: 10,
                            paddingRight: 10,
                            width: Dimensions.get("window").width * 0.5,
                        }}
                    >
                        <TouchableOpacity style={styles.navbarButton}>
                            <Text style={styles.navbarButtonText}>Editar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                ...styles.navbarButton,
                                backgroundColor: "#dc3545",
                            }}
                        >
                            <Text style={styles.navbarButtonText}>Apagar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    navbar: {
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        position: "absolute",
        top: 0,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: Dimensions.get("window").width,
        backgroundColor: "#fff",
    },
    navbarTitle: {
        fontSize: 22,
        fontWeight: "bold",
    },
    navbarButton: {
        padding: 10,
        backgroundColor: "#0d6efd",
        borderRadius: 4,
    },
    navbarButtonText: {
        color: "#fff",
    },

    table: {
        display: "flex",
        flexDirection: "column",
    },
    tableHead: {
        width: Dimensions.get("window").width,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    tableHeadText: {
        fontSize: 14,
        fontWeight: "bold",
    },
});
