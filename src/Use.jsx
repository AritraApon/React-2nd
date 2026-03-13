export default function Use({ user }) {
    // console.log(user)
       const {username,company,address} = user;
       const {name} = company;
       const {city} = address ;
    //    console.log(city)


    return (
        <div className="card2">
            <h2 className="username">User Name: {username}</h2>
            <p className="company"> Company name:{name}</p>
            <p className="city"> City Name:{city ? city:"sorry"}</p>

        </div>
    )
}