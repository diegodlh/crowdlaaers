function participantGraphBuilder(participantData,response) {
  let participantMessageTypeDataTable = new google.visualization.DataTable();
  let bar_graph_contributors = new google.visualization.ColumnChart(document.getElementById('participant_graph_div'));
  let opts = {
    width: '100%', height: '100%', legend: { position: 'none' },
    vAxis: { format: '#' }, isStacked:true, colors: ['#243c68', '#e6693e'], 
  };

  participantMessageTypeDataTable.addColumn({type: 'string', id: 'tag', label: 'Tag'});
  participantMessageTypeDataTable.addColumn({type: 'number', id: 'total', label: 'Total'});
  participantMessageTypeDataTable.addColumn({type: 'number', id: 'annotations', label: 'Annotations'});
  participantMessageTypeDataTable.addColumn({type: 'number', id: 'replies', label: 'Replies'});
  participantMessageTypeDataTable.addColumn({type: 'date', id: 'Date', label: 'Date'});

  for (var m in participantData) {
    participantMessageTypeDataTable.addRows([
      [ m,participantData[m]['participantTotalMessages'],participantData[m]['annotations'],participantData[m]['replies'],
      participantData[m]['dateLatest']]
    ]);
  }

  //sorts by amount: col 1; recent: col 4 
  participantMessageTypeDataTable.sort({column:4, desc:true});
  let participantMessageTypeDataView = new google.visualization.DataView(participantMessageTypeDataTable);
  participantMessageTypeDataView.setColumns([0,2,3]);
  bar_graph_contributors.draw(participantMessageTypeDataView, opts);

  $( "#participantCounter" ).text(participantMessageTypeDataView.getNumberOfRows());

  google.visualization.events.addListener(bar_graph_contributors, 'select', function() {
    google.visualization.events.removeListener(event);
    var row = bar_graph_contributors.getSelection()[0].row;
    bar_graph_contributors.setSelection(); //needed to prevent graph freezing on 2nd click
    var name = participantMessageTypeDataView.getValue(row, 0);
    filter = {
      user: name,
      group: "",
      url: "",
      wildcard_uri: "",
      tag: "",
      any: "",
      max: "",
      thread: "",
      date: ""
    };
    dataObjects = groupObjectBuilder(response,filter);

    annotationTableBuilder(response,dataObjects[5],filter);
    participantGraphBuilder(dataObjects[2],response);
    threadGraphBuilder(dataObjects[3],response);
    urlGraphBuilder(dataObjects[0],response);
    daysGraphBuilder(dataObjects[4],response);
    tagsGraphBuilder(dataObjects[1],response);
  });
}