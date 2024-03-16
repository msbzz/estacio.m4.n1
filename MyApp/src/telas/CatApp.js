import Cafe from "../componens/catapp/Cafe";
import Cat from "../componens/catapp/Cat";
import CatChat from "../componens/catapp/CatChat";

 function CatApp ({ navigation }){

    return (
    <>
      <Cat/>
      <CatChat/>
      <Cafe/>
    </>

    );


};

export default  CatApp;