const server = 'http://localhost:3000/definition'

const columnDefs = [
    { headerName: 'id', field: 'id', width: 100 },
    { headerName: 'Περιγραφή', field: 'comments', editable: true },
];
const gridOptions = {
    columnDefs: columnDefs,
    onFirstDataRendered: (params) => params.api.sizeColumnsToFit(),
    onCellEditingStopped: function(event) {
        axios.patch(server + `?id=eq.${event.data.id}`, {
            comments: event.data.comments
        }).catch((e) => {
            console.log(e)
            alert('Αποτυχία εγγραφής')
            getData(server + '?select=id,comments&order=id')
        })
    }};

const getData = function (url) {
    axios.get(url).then(function (resp) {
        gridOptions.api.setRowData(resp.data)
    })    
}    

getData(server + '?select=id,comments&order=id')

const eGridDiv = document.querySelector('#myGrid');
new agGrid.Grid(eGridDiv, gridOptions);