import { useContext } from "react";
import {
    Dimensions,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { ClientContext } from "../contexts/ClientContext";

export default function ModalClientCreate() {
    const { showModalClientCreate, setShowModalClientCreate } =
        useContext(ClientContext);

    return (
        <View
            style={{
                ...styles.container,
                display: showModalClientCreate ? "flex" : "none",
            }}
        >
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Cadastrar Cliente</Text>

                <TouchableOpacity
                    style={styles.headerCloseButton}
                    onPress={() => setShowModalClientCreate(false)}
                >
                    <Text style={styles.headerCloseText}>x</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.form}>
                <View style={styles.formItem}>
                    <Text style={styles.formItemText}>CPF:</Text>
                    <TextInput style={styles.formItemInput} />
                </View>

                <View style={styles.formItem}>
                    <Text style={styles.formItemText}>Nome:</Text>
                    <TextInput style={styles.formItemInput} />
                </View>

                <View style={styles.formItem}>
                    <Text style={styles.formItemText}>Sobrenome:</Text>
                    <TextInput style={styles.formItemInput} />
                </View>

                <View style={styles.formItem}>
                    <Text style={styles.formItemText}>Data de Nascimento:</Text>
                    <TextInput style={styles.formItemInput} />
                </View>

                <View style={styles.formItem}>
                    <Text style={styles.formItemText}>E-mail:</Text>
                    <TextInput style={styles.formItemInput} />
                </View>

                <View style={styles.formItem}>
                    <Text style={styles.formItemText}>Gênero:</Text>
                    <TextInput style={styles.formItemInput} />
                </View>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity
                    style={{
                        ...styles.footerButton,
                        backgroundColor: "#6c757d",
                    }}
                >
                    <Text style={styles.footerButtonText}>Recomeçar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        ...styles.footerButton,
                        backgroundColor: "#198754",
                    }}
                >
                    <Text style={styles.footerButtonText}>Inserir</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        width: Dimensions.get("window").width * 0.9,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderRadius: 4,
    },

    header: {
        paddingBottom: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: "bold",
    },
    headerCloseButton: {
        width: 40,
        height: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    headerCloseText: {
        fontSize: 22,
        color: "#6c757d",
    },

    form: {
        paddingTop: 20,
    },
    formItem: {},
    formItemText: {
        fontSize: 14,
        fontWeight: "bold",
    },
    formItemInput: {
        marginTop: 5,
        marginBottom: 10,
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 2,
    },

    footer: {
        display: "flex",
        justifyContent: "flex-end",
        flexDirection: "row",
        gap: 10,
    },
    footerButton: {
        width: "auto",
        padding: 10,
        backgroundColor: "#0d6efd",
        borderRadius: 4,
    },
    footerButtonText: {
        color: "#fff",
    },
});
