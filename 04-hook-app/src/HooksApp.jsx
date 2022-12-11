import { CounterApp} from "./01-useState/CounterApp";
import Header from "./components/HeaderApp";
import { CounterWithCustomHook} from "./01-useState/CounterWithCustomHook";
import { SimpleForm } from "./02-useEffect/SimpleForm";
import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
import { FocusSceen } from "./04-useRef/FocusScreen";
import { Layout } from "./05-useLayoutEffect/Layout";
import { Memorize } from "./06-memos/Memorize";
import { MemoHook } from "./06-memos/MemoHook";
import { Padre } from "./07-tarea-memo/Padre";
import { TodoApp } from "./08-useReducer/TodoApp";
import { MainApp } from "./09-useContext/MainApp";




const HooksApp = () => {
    
    return (
        <>
            {/* <Header></Header>
            <CounterApp></CounterApp>
            <hr></hr>
            <CounterWithCustomHook></CounterWithCustomHook>
            <hr></hr>
            <SimpleForm></SimpleForm>
            <hr/>
            <FormWithCustomHook></FormWithCustomHook> */}
            {/* <MultipleCustomHooks></MultipleCustomHooks> */}
            {/* <FocusSceen></FocusSceen> */}
            {/* <Layout></Layout> */}
            {/* <Memorize></Memorize> */}
            {/* <MemoHook></MemoHook> */}
            {/* <Padre></Padre> */}
            {/* <TodoApp></TodoApp> */}
            <MainApp></MainApp>
        </>
    );
}

export default HooksApp;
