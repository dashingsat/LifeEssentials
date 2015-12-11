var Landingheader = React.createClass (
    {
        render : function(){
           return(
               <nav className= "navbar navbar-inverse dn-header">
                   <ul className="nav navbar-nav">
                   <li className="active "><a href="/">Home</a></li>
                   <li className="nav-services" > <a href="#">  Services </a> </li>
                       <li className="nav-blog"><a href="#">Blog</a></li>
                   <li className="nav-about"> <a href="/about">About </a> </li>

                  </ul>

                   <ul className="nav navbar-nav navbar-right">

                       <li><a href="#"> Log in</a></li>
                       <li><a href="#"> Sign up</a></li>


                   </ul>
               </nav>
           );

        }
    }

) ;


var PromotionStatement = React.createClass (
    {
        render : function(){
           return(
               <div className="dn-promotion text-primary" > <h1> The magical place to get your daily things done !! </h1> </div>

           ) ;
        }
    }


) ;

var LandingConstruct = React.createClass(
    {
        render : function(){
            return (
                <div className="landing-const">
                    <Landingheader />
                    <PromotionStatement />
                    <LandingProduct name = "Domestic help"/>
                    <LandingFooter/>


                 </div>




            ) ;

        }
    }

);

 var LandingProduct = React.createClass(
     {
         render : function(){
             return(
                 <div className = "Landing-Product">
                     <div className ="text-primary Product-Name">{this.props.name} </div>
                     <div className ="Product-Order"><a href="#"> Order now !!</a></div>
                 </div>
             );
         }
     }

 );

 var LandingFooter = React.createClass(
    {
        render : function(){
            return(
                <nav className="navbar navbar-inverse navbar-fixed-bottom">

                    <ul className="nav navbar-nav dn-footer ">
                        <li className="active dn-footer"><a href="/">  Happiness group of industries ..Breathing happiness</a></li>
                    </ul>


                </nav>
            );

        }
    }

) ;

ReactDOM.render(
    <LandingConstruct /> , document.getElementById('content')

);