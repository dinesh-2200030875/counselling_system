export default function Logout() {
    localStorage.removeItem("token")
    return(
        <div>
            <canter><h1>You had logged out successfully</h1></canter>
        </div>
    )
}