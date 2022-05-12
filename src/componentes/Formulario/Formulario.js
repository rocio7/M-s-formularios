
import React,{useState} from "react";

const Formulario = () =>{

    const [nombre, setNombre] = useState("");
    const [apellido,setApellido] = useState("");
    const [email,setEmail] = useState("");
    const [contraseña,setContraseña] = useState("");
    const [confirmContraseña,setConfirmarContraseña] = useState("");

    const validarNombre = () => 
    {
        if(nombre === '')
        {
            return ''
        }
        else
        {
            if(nombre.length<2)
            {
                return <p className="text-danger">First Name must be at least 2 characteres</p>
            }
        }
    }

    const validarApellido = () => 
    {
        if(apellido === '')
        {
            return ''
        }
        else
        {
            if(apellido.length<2)
            {
                return <p className="text-danger">Last Name must be at least 2 characteres</p>
            }
        }
    }

    const validarCorreo = () => 
    {
        if(email === '')
        {
            return ''
        }
        else
        {
            if(email.length<5)
            {
                return <p className="text-danger">Email must be at least 5 characteres</p>   
            }
        }
    }

    const validarContraseña = () => 
    {
        if(contraseña === '')
        {
            return ''
        }
        else
        {
            if(contraseña.length < 8 )
            {
                return <p className="text-danger">Password must be at least 8 characteres</p>   
            }
        }
    }

    const validarContraseñaConfirm = () => 
    {
        if(confirmContraseña === '')
        {
            return ''
        }
        else
        {
            if(!(contraseña===confirmContraseña))
            {
                return <p className="text-danger">Passwords must match</p>   
            }
        }
    }


    return(

        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="nombre">First Name</label>
                    <input id="nombre" className="form-control" onChange={(e) => setNombre(e.target.value)} value={nombre}/>
                    {validarNombre()}
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input className="form-control" onChange={(e) => setApellido(e.target.value)} value={apellido}/>
                    {validarApellido()}
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email}/>
                    {validarCorreo ()}
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" onChange={(e) => setContraseña(e.target.value)} value={contraseña}/>
                    {validarContraseña()}
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" onChange={(e) => setConfirmarContraseña(e.target.value)} value={confirmContraseña}/>
                    {validarContraseñaConfirm()}
                </div>
            </form>


        </div>


    )

}
export default Formulario;

