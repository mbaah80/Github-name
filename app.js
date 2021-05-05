function search(){
   const username = document.getElementById('username').value;

    fetch(`https://api.github.com/users/${username}`)
    .then((res)=>{
        res.json().then(
            data=>{
              
                $("#info").show();
                console.log(data)
    
                document.getElementById('name').innerHTML = data.name
                document.getElementById('email').innerHTML = data.email
                document.getElementById('id').innerHTML = data.id
                document.getElementById('image').innerHTML =`<img src=${data.avatar_url} class="img-thumbnail" alt="avator" style="width: 250px; height: 250px;"/>`;
                document.getElementById('location').innerHTML = data.location
                document.getElementById('repo').innerHTML = data.public_repos
                document.getElementById('date').innerHTML = data.created_at
            }
           
        )
    })
}