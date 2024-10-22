// API: https://randomuser.me/api/?results=6
// 圖片清晰度: 清晰、中等、模糊
// Address: city + state + country + postcode
const url = 'https://randomuser.me/api/?results=6'
let orgData = {};

fetchData();

function fetchData() {
    fetch(url)
        .then(response => response.json())
        .then(dataAll => {
            // cell(dataAll);
            // name-last();
            // name-first();
            // gender();
            // phone

            console.log(dataAll);
        });
}
function organizationData(dataAll) {
    const idAll = dataAll.results;
    idAll.forEach(id => {

        let large = large.picture.result;
        let medium = medium.picture.result;
        let thumbnail = thumbnail.picture.result;
        let title = title.name.result;
        let first = first.name.result;
        let last = last.name.result;
        let gender = gender.result;
        let phone = phone.result;
        let cell = cell.result;
        let email = email.result;
        let street = street.location.result;
        let city = city.location.result;
        let state = state.location.result;
        let postcode = postcode.location.result;



        orgData[id] = {
            large: large,
            medium: medium,
            thumbnail: thumbnail,
            title: title,
            first: first,
            last: last,
            gender: gender,
            phone: phone,

        }
    });
}
