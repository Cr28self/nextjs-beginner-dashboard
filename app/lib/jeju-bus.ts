
// reference : https://bus.jeju.go.kr/search/station?searchText=%25EC%25A0%259C%25EC%25A3%25BC%25EB%258C%2580

async function fetchData() {
    const formData = new FormData();
    formData.append('keyword', "제주대");

    const res = await fetch("https://bus.jeju.go.kr/data/search/searchStationByKeyword", {
        method: "POST", // or 'PUT'

        body: formData
    });
    return res.json();

}