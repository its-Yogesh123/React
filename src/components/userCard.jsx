const UserCard=(props)=>{
    return (
        <div className="user-card">
            <h1>{props?.name?.title} {props?.name?.first} {props?.name?.last}</h1>
            <p>{props?.email}</p>
        </div>
    );
};

export default UserCard;