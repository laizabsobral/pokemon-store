import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/header";

export default function Carrinho() {

    const navigate = useNavigate();

    return (
        <div>
            <Header/>
        </div>
    );

}