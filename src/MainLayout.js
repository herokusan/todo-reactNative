import react,{useState} from "react";
import { View } from "react-native-web";
import { THEME } from "./theme";

export const MainLayout = () => {

    const [todoId, setToDoId] = useState(null)
    const [todos, setTodos] = useState([])

    return(
        <View>
            <View style = {styles.container}> {content}</View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        color:THEME.MAIN_COLOR
    }
})