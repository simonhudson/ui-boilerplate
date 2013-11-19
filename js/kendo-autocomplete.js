$(document).ready(function () {
    var data = ['Derby County','Leicester City','Nottingham Forest','Notts County'];

    $('#football-clubs').kendoAutoComplete({
        dataSource: data,
        filter: 'startswith',
        placeholder: 'Select country...',
        separator: ', '
    });
});