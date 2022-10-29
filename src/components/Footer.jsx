import ListLinks from "../components/ListLinks";

const linksElsewhere = [
  {
       "id": 1,
       "name": "Github",
       "url": "https://github.com/"
   },
   {
       "id": 2,
       "name": "Twitter",
       "url": "https://twitter.com/"
   },
   {
       "id": 3,
       "name": "facebok",
       "url": "https://www.facebook.com/"
   }

];

function Footer() {
    return ( 
        <footer className="footer  py-3 bg-black mb-0" style={{marginTop:"4rem"}}>
      {/* w3-center w3-light-grey  w3-large */}
        
        <div className="container">
        <div className=" col-12"> 
        <ListLinks links={linksElsewhere}/>
      </div>
        </div>
    </footer>
     );
}

export default Footer;