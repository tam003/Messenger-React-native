import Firebase from './Firebase'

export const AddUser = async(name, email, avatar, birthdate, addr, uid) =>{
    try {
        return await Firebase.database().ref('users/' + uid)
                                        .set({
                                            name: name,
                                            email: email,
                                            avatar: avatar,
                                            birthdate: birthdate,
                                            addr: addr,
                                            uuid: uid
                                        });
    } catch (error) {
        alert(error)
    }
}

export default AddUser