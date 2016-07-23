console.log("Hello World!!!");
window.onload = function () {

var newFriends = ["Dede","Goku","Bambam","Alexander","Maximus","Blixen","Plato","Socrates","Mikael"];
for (var i = 0; i < newFriends.length; i++) {
	console.log(newFriends[i]);

	var addNewFriend = document.createElement('li');
	addNewFriend.className = "newFriends";
	addNewFriend.innerHTML = newFriends[i];
	list.appendChild(addNewFriend);
}






};