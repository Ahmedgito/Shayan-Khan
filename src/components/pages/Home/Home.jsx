import React, { useEffect } from "react";
import Layout from "../../layout/Layout";
import Section1 from '../../pages/Home/Section1/Section1'
import Section2 from "./Section2/Section2";



const Home = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return (
      
      <Layout>

        <Section1 />  
        <Section2 />
      </Layout>
    );
  };
  
  export default Home;