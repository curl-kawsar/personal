$(document).ready(function () {

  // A. Main Category

  $('#som-driver-installer').DataTable({
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

  $('#som-first-install').DataTable({
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

  $('#som-file-folder-protector').DataTable({
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

  $('#som-internet-browsers').DataTable({
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

  $('#som-security-optimization').DataTable({
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

  $('#som-document-office-tools').DataTable({
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

  $('#...').DataTable({
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

  $('#som-imaging-multimedia').DataTable({
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

  $('#som-designer-tools').DataTable({
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

  $('#som-producer-tools').DataTable({
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

  // B. Developer Pack

  $('#sod-web-developer').DataTable({
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

  $('#sod-mobile-developer').DataTable({
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

  $('#sod-desktop-developer').DataTable({
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

  $('#sod-data-science-al-ml-developer').DataTable({
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

  $('#sod-game-developer').DataTable({
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

  $('#sod-network-developer').DataTable({
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

  // C. Miscellaneous

  $('#sos-emulators').DataTable({
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

  $('#sos-cd-dvd-blue-ray-apps').DataTable({
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

  $('#sos-hdd-ssd-apps').DataTable({
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

  $('#sos-remote-apps').DataTable({
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

  $('#sos-time-saving-apps').DataTable({
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

  $('#sos-education-apps').DataTable({
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

  $('#sos-islamic-apps').DataTable({
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

  $('#sos-useful-apps').DataTable({
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