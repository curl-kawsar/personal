$(document).ready(function () {

  $('#exg-starter-pack').DataTable({
    'bPaginate': false, // Hide paginate
    "bLengthChange": false,
    "bInfo": false, // Hide entry text
    "bAutoWidth": false,
    "bFilter": false, // Hide search box
    'columnDefs': [{
      'orderable': false,
      'targets': [0]
    }], // Hide sort icon on header of first column
    'aaSorting': [
      [99, 'asc']
    ], // Start to sort data: Disable
  });

  $('#exg-better-browsing').DataTable({
    'bPaginate': false,
    "bLengthChange": false,
    "bInfo": false,
    "bAutoWidth": false,
    "bFilter": false,
    'columnDefs': [{
      'orderable': false,
      'targets': [0]
    }],
    'aaSorting': [
      [99, 'asc']
    ],
  });

  $('#exg-better-watching').DataTable({
    'bPaginate': false,
    "bLengthChange": false,
    "bInfo": false,
    "bAutoWidth": false,
    "bFilter": false,
    'columnDefs': [{
      'orderable': false,
      'targets': [0]
    }],
    'aaSorting': [
      [99, 'asc']
    ],
  });

  $('#exg-better-reading').DataTable({
    'bPaginate': false,
    "bLengthChange": false,
    "bInfo": false,
    "bAutoWidth": false,
    "bFilter": false,
    'columnDefs': [{
      'orderable': false,
      'targets': [0]
    }],
    'aaSorting': [
      [99, 'asc']
    ],
  });

  $('#exg-reading-tools').DataTable({
    'bPaginate': false,
    "bLengthChange": false,
    "bInfo": false,
    "bAutoWidth": false,
    "bFilter": false,
    'columnDefs': [{
      'orderable': false,
      'targets': [0]
    }],
    'aaSorting': [
      [99, 'asc']
    ],
  });

  $('#exg-documents-reader').DataTable({
    'bPaginate': false,
    "bLengthChange": false,
    "bInfo": false,
    "bAutoWidth": false,
    "bFilter": false,
    'columnDefs': [{
      'orderable': false,
      'targets': [0]
    }],
    'aaSorting': [
      [99, 'asc']
    ],
  });

  $('#exg-easiest-translate').DataTable({
    'bPaginate': false,
    "bLengthChange": false,
    "bInfo": false,
    "bAutoWidth": false,
    "bFilter": false,
    'columnDefs': [{
      'orderable': false,
      'targets': [0]
    }],
    'aaSorting': [
      [99, 'asc']
    ],
  });

  $('#exg-downloader-tools').DataTable({
    'bPaginate': false,
    "bLengthChange": false,
    "bInfo": false,
    "bAutoWidth": false,
    "bFilter": false,
    'columnDefs': [{
      'orderable': false,
      'targets': [0]
    }],
    'aaSorting': [
      [99, 'asc']
    ],
  });

  $('#exg-frontend-developer').DataTable({
    'bPaginate': false,
    "bLengthChange": false,
    "bInfo": false,
    "bAutoWidth": false,
    "bFilter": false,
    'columnDefs': [{
      'orderable': false,
      'targets': [0]
    }],
    'aaSorting': [
      [99, 'asc']
    ],
  });

  $('#exg-miscellaneous').DataTable({
    'bPaginate': false,
    "bLengthChange": false,
    "bInfo": false,
    "bAutoWidth": false,
    "bFilter": false,
    'columnDefs': [{
      'orderable': false,
      'targets': [0]
    }],
    'aaSorting': [
      [99, 'asc']
    ],
  });

});