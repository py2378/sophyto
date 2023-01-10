import NavBar from "./NavBar/NavBar";

function Layout(props){

    let {children} = props;

    return(
        <div id={'App'}>
            <NavBar/>
            <main>
                {children}
            </main>
            <script src=
                        "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
                    type="text/javascript" />
        </div>
    );
}

export default Layout;