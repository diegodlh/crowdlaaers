$( document ).ready(function() {

  google.charts.load('current', {'packages':['table','corechart','calendar']});
  var response;
  var syllabus = {
    august2016:{
      url:"http://www.commonsense.org/education/privacy/blog/digital-redlining-access-privacy",
      summary:"Starting in August 2016, Marginal Syllabus text-participants read and discussed “Digital Redlining, Access, and Privacy,” a blog post for Common Sense Education written by Chris Gilliard and Hugh Culik. Chris and Hugh’s post discusses how “digital redlining” creates inequitable educational opportunities for learners."
    },
    september2016:{
      url:"http://dmlcentral.net/speculative-design-for-emergent-learning-taking-risks&ur=https://clalliance.org/blog/speculative-design-for-emergent-learning-taking-risks/",
      summary:"Starting in September 2016, Marginal Syllabus text-participants read and discussed “Speculative Design for Emergent Learning: Taking Risks,” a blog post for DML Central by Mia Zamora. Mia’s post reflects upon her “Writing Race and Ethnicity” course and shares insight about her instructional decision-making and co-design with students."
    },
    october2016:{
      url:"http://marginalsyllab.us/wp-content/uploads/2016/08/PWFlow-Intro.pdf",
      summary:"Starting in October 2016, Marginal Syllabus text-participants read and discussed “What It Means to Pose, Wobble, and Flow,” the introductory chapter of Pose, Wobble, Flow: A Culturally Proactive Approach to Literacy Instruction by Antero Garcia and Cindy O’Donnell-Allen. Antero and Cindy’s chapter introduces a yoga metaphor to discuss teacher learning about culturally relevant literacy pedagogy and student literacy practices."
    },
    november2016:{
      url:"https://helenbeetham.com/2016/11/14/ed-tech-and-the-circus-of-unreason",
      summary:"Starting in November 2016, Marginal Syllabus text-participants read and discussed “Ed Tech and the Circus of Unreason,” a blog post by Helen Beetham. Helen’s post critically analyzes the state of educational technology, with a focus on higher education contexts, and in response suggests educator responsibilities that include a focus on addressing educational inequalities."
    },
    january2016:{
      url:"http://marginalsyllab.us/the-school-and-social-progress-by-john-dewey",
      summary:"Starting in January 2017, Marginal Syllabus text-participants read and discussed “The School and Social Progress,” the first chapter from John Dewey’s seminal book The School and Society. This conversation was organized in collaboration with Christina Cantrill and teacher education courses at Arcadia University."
    },
    february2016:{
      url:"http://marginalsyllab.us/preface-to-research-writing-rewired-lessons-that-ground-students-digital-learning-by-dawn-reed-and-troy-hicks/",
      summary:"Starting in February 2017, Marginal Syllabus text-participants read and discussed “Reading, Writing, and Inquiry With Adolescents,” the preface to Research Writing Rewired: Lessons that Ground Digital Learning by Dawn Reed and Troy Hicks. Dawn and Troy’s chapter shares principles they employ for research writing, discuss the ubiquity of digital tools for writing and publication, and comment upon the internet as a site for inquiry and research."
    },
    march2016:{
      url:"https://www.colorlines.com/articles/how-can-white-teachers-do-better-urban-kids-color",
      summary:"Starting in March 2017, Marginal Syllabus text-participants read and discussed “How Can White Teachers Do Better by Urban Kids of Color?,” an excerpt from For White Folks Who Teach in the Hood…and the Rest of Y’all Too: Reality Pedagogy and Urban Education by Christopher Emdin. Christopher’s excerpt discusses race in the classroom by contrasting the voices of students of color with those of white educators, while also sharing reflections about pedagogy, asset-based education, and cultural relevance."
    },
    april2016:{
      url:"http://educatorinnovator.org/between-storytelling-and-surveillance-the-precarious-public-of-american-muslim-youth/",
      summary:"Starting in April 2017, and in collaboration with Educator Innovator, Marginal Syllabus text-participants read and discussed “Between Storytelling and Surveillance: The Precarious Public of American Muslim Youth,” a chapter by Sangita Shresthova from By Any Media Necessary (co-authored by Henry Jenkins, Sangita Shresthova, Liana Gamber-Thompson, Neta Kligler-Vilenchik, and Arely Zimmerman). Sangita’s chapter addresses the ways in which American Muslim youth experience islamophobia online, and also how they endure the criticism of older community members who may take issue with some youth’s desire to have expressive and creative online identities."
    },
    may2016:{
      url:"https://via.hypothes.is/http://educatorinnovator.org/wp-content/uploads/2017/05/LaMay-Ch5.pdf",
      summary:"Starting in May 2017, and in collaboration with Educator Innovator, Marginal Syllabus text-participants read and discussed “Revising Narrative Truth,” a chapter from Personal Narrative, Revised by Bronwyn Clare LaMay. Bronwyn’s chapter shares a challenging and inspiring story about how to develop inclusive classroom communities that nurture student risk-taking, expression, and learning."
    },
    october2017:{
      url:"http://educatorinnovator.org/how-young-activists-deploy-digital-tools-for-social-change",
      summary:"Starting in October 2017, Marginal Syllabus text-participants read and discussed “How Young Activists Deploy Digital Tools for Social Change,” a blog post for DML Central by Henry Jenkins. Henry’s post, part of the Writing Our Civic Futures syllabus, discusses how youth from different cultural contexts participate in digital politics and contribute to social movements."
    },
    november2017:{
      url:"https://educatorinnovator.org/wp-content/uploads/2017/10/RRE_Chapter-6_Civic-Participation-Remiagined_0091732X17690121.pdf",
      summary:"Starting in November 2017, Marginal Syllabus text-participants read and discussed “Civic Participation Reimagined: Youth Interrogation and Innovation in the Multimodal Public Sphere,” an article in Review of Research in Education by Nicole Mirra and Antero Garcia. Nicole and Antero’s article, part of the Writing Our Civic Futures syllabus, challenges dominant narratives about the civic disengagement of youth from marginalized communities and develops a new conceptual model for civic learning and engagement that pushes past participation into the realms of interrogation and innovation."
    },
    december2017:{
      url:"https://educatorinnovator.org/wp-content/uploads/2017/10/Critical-Literacy-And-Our-Students-Lives.pdf",
      summary:"Starting in December 2017, Marginal Syllabus text-participants read and discussed “Critical Literacy and Our Students’ Lives,” an article in Voices From the Middle by Linda Christensen. Linda’s article, part of the Writing Our Civic Futures syllabus, shares pedagogical reflections on the importance of critical literacy, with an emphasis on developing curricula and lessons that center students’ lives and interests."
    },
    january2017:{
      url:"https://educatorinnovator.org/wp-content/uploads/2017/12/OurDeclaration_PG31-35.pdf",
      summary:"Starting in January 2018, Marginal Syllabus text-participants read and discussed “Night Teaching,” the second chapter from Our Declaration: A Reading of the Declaration of Independence in Defense of Equality by Danielle Allen. Daniell’s chapter, part of the Writing Our Civic Futures syllabus, recalls her experiences teaching the Declaration of Independence to night students at the University of Chicago, and includes incisive reflections about political equality, freedom, and the power of language."
    },
    february2017:{
      url:"https://educatorinnovator.org/wp-content/uploads/2018/02/Educating-for-Democracy-in-a-Partisan-Age.pdf.pdf",
      summary:"Starting in February 2018, Marginal Syllabus text-participants read and discussed “Educating for Democracy in a Partisan Age: Confronting the Challenges of Motivated Reasoning and Misinformation,” an article in American Educational Research Journal by Joseph Kahne and Benjamin Bowyer. Joseph and Benjamin’s article, part of the Writing Our Civic Futures syllabus, presents a study that Investigated youth judgments of the accuracy of truth claims tied to controversial public issues. The authors found that youth’s political knowledge did not improve judgments of accuracy but that media literacy education did."
    },
    march2017:{
      url:"https://educatorinnovator.org/wp-content/uploads/2018/02/The-Stories-They-Tell-.pdf",
      summary:"Starting in March 2018, Marginal Syllabus text-participants read and discussed “The Stories They Tell: Mainstream Media, Pedagogies of Healing, and Critical Media Literacy,” an article in English Education by April Baker-Bell, Raven Jones Stanbrough, and Sakeena Everett. April, Raven, and Sakeena’s article, part of the Writing Our Civic Futures syllabus, discusses how pedagogies of healing and critical media literacy are necessary in the wake of racial violence when mainstream media stigmatize, characterize, and marginalize Black youth. The article includes sample lesson plans and a discussion of how English educators have a responsibility to raise awareness about racial injustice."
    },
    april2017:{
      url:"https://educatorinnovator.org/wp-content/uploads/2018/03/Educating-Youth-for-Online-Civic-and-Political-Dialogue_-A-Conceptual-Framework-for-the-Digital-Age-_-Journal-of-Digital-and-Media-Literacy.pdf",
      summary:"Starting in April 2018, Marginal Syllabus text-participants read and discussed “Educating Youth for Online Civic and Political Dialogue: A Conceptual Framework for the Digital Age,” an article in the Journal of Digital and Media Literacy by Erica Hodgin. Erica’s article, part of the Writing Our Civic Futures syllabus, reports upon four high school teachers’ work on a participatory academic platform and details five stages of opportunity that built young people’s capacity for civic voice and influence."
    },
    may2017:{
      url:"https://educatorinnovator.org/wp-content/uploads/2018/03/zemelman_websample.pdf",
      summary:"Starting in May 2018, Marginal Syllabus text-participants read and discussed the introduction of From Inquiry to Action: Civic Engagement with Project-Based Learning in All Content Areas by Steven Zemelman. Steve’s chapter, part of the Writing Our Civic Futures syllabus, provides practice-based examples and strategies to engage students in social action projects with a focus on amplifying student choice, strengthening engagement, and addressing injustices in the community."
    },
    june2017:{
      url:"http://www.ncte.org/library/NCTEFiles/Resources/Journals/VM/0254-may2018/VM0254Leading.pdf",
      summary:"Starting in June 2018, Marginal Syllabus text-participants read and discussed “The Next Decade of Digital Writing,” an article in Voices from the Middle by Troy Hicks. Troy’s article, an interest-driven addition to the Writing Our Civic Futures syllabus, argues that educators need to provide intellectual and emotional space for students to explore new ideas, gather their own evidence, and present academic arguments through media other than just the printed word."
    },
    october2018:{
      url:"http://educatorinnovator.org/wp-content/uploads/2018/10/Electing_to_Heal.pdf",
      summary:"Starting in October 2018, Marginal Syllabus text-participants read and discussed 'Electing to Heal: Trauma, Healing, and Politics in Classrooms,' an article from English Education by Antero Garcia and Elizabeth Dutro. Antero and Elizabeth's article, part of the Literacy, Equity + Remarkable Notes = LEARN syllabus, argues that English educators must address trauma in classrooms, while also recognizing how individuals and groups are positioned differently in the material and emotional aftermath of the 2016 presidential election."
    },
    december2018:{
      url:"https://educatorinnovator.org/wp-content/uploads/2018/11/What_s_Radical_marginal-syllabus.pdf",
      summary:"Starting in December 2018, Marginal Syllabus text-participants read and discussed 'What's radical about youth writing?: Seeing and honoring youth writers and their literacies,' an article in Voices From the Middle by Marcelle Haddix. Marcelle's article, part of the Literacy, Equity + Remarkable Notes = LEARN syllabus, describes the Writing Our Lives after-school program and argues that what is radical about youth writing is youth 'persistence to get their stories out in spite of prevailing narratives that suggest that they are not writing or that they do not have anything to express.'"
    }
  }

  $("#conversation_summary").html(syllabus['december2018']['summary']);

  params.url = syllabus['december2018']['url'];

  hlib.hApiSearch(params, processSearchResults, '');

  function inactivate() {
    for (var key in syllabus){
      $( "#" + key ).attr("class", "nav-link");
    };

    $( "#contributorsClick" ).attr("class", "nav-link active");
    $( "#calendarClick" ).attr("class", "nav-link");
    $( "#threadsClick" ).attr("class", "nav-link");
    $( "#tagsClick" ).attr("class", "nav-link");
    $( "#graphLabel" ).text("Annotations per Contributor");
    $( "#graph" ).css("height","300px");
    $( "#graph" ).html('<h3>Loading...</h3>');
    $( "#annotationCounter" ).text("*");
  };

  function drawTable(response) {
    if(response.length == 0){
      $( "#graph" ).html('<h3>No Data Found...</h3>');
      return false;
    }
    $('[data-toggle="tooltip"]').tooltip();
    var data = new google.visualization.DataTable();
    var tagData = new google.visualization.DataTable();
    var messageTypeData = new google.visualization.DataTable();
    //Table columns
    data.addColumn({type: 'date', id: 'Date', label: 'Date'});
    data.addColumn({type: 'string', id: 'user', label: 'Contributor'});
    data.addColumn({type: 'string', id: 'textSummary', label: 'Annotation'});
    data.addColumn({type: 'string', id: 'NodeMsg', label: 'Anchor'});
    data.addColumn({type: 'string', id: 'textComplete', role: 'annotationText'});
    data.addColumn({type: 'string', id: 'tags', label: 'Tags'});
    data.addColumn({type: 'string', id: 'link', label: 'Link'});
    data.addColumn({type: 'number', id: 'level', label: 'Level'});
    //Tag chart columns
    tagData.addColumn({type: 'string', id: 'tag', label: 'Tag'});
    tagData.addColumn({type: 'number', id: 'count', label: 'Count'});
    //message type columns
    messageTypeData.addColumn({type: 'string', id: 'tag', label: 'Tag'});
    messageTypeData.addColumn({type: 'number', id: 'total', label: 'Total'});
    messageTypeData.addColumn({type: 'number', id: 'annotations', label: 'Annotations'});
    messageTypeData.addColumn({type: 'number', id: 'replies', label: 'Replies'});


    //var rows = response['rows'];
    //var total = response['total'];
    var rows = response;
    var total = response.length;

    var threads = [];
    var tagArray = [];
    var tagCounts = {};
    var messageTypeCount = {};
    var level = 0;

    for (ss of rows){
      //create array of annotations with replies as root for threads
      //if (ss['references']){
      //  if (!threads.includes(ss['references'][0])){
      //    threads.push(ss['references'][0]);
      if (ss['refs']){
        if (!threads.includes(ss['refs'][0])){
          threads.push(ss['refs'][0]);
        }
      }  
      //create array of tags to build tag column graph
      if (ss['tags'].length > 0){
        ss['tags'].forEach(function (t) {
          tagArray.push(t.toLowerCase());
        });
      }
    }
    for (s of rows) {
      //Count the threads
      var nodeMsg = "Document";
      if (threads.includes(s['id'])){
        //if message is anchor annotation in the thread sets anchor ID it to
        //message ID 
        nodeMsg = s['id'];
        level = 0;
      }

      //if (s['references']){
        //Sets anchor ID to the first anchor annotation
      //  nodeMsg = s['references'][0];
      //  level = s['references'].length;
      if (s['refs']){
        //Sets anchor ID to the first anchor annotation
        nodeMsg = s['refs'][0];
        level = s['refs'].length;
      }

      //Creates a annotation clip to display in table
      if (s['text'].length > 50){
        var textSummary = s['text'].slice(0, 50) + "...";
      } else {
        var textSummary = s['text'];
      }

      //var date = new Date(s['created']);
      var date = new Date(s['updated']);
      var year = date.getYear() + 1900;
      var month = date.getMonth();
      var dateDay = date.getDate();
      var hour = date.getHours();
      var mins = date.getMinutes();
      var second = date.getSeconds();
      //var username = s['user'].slice(5,-12);
      var username = s['user'];
      var textTotal = s['text'];
      //var link = s['links']['incontext'];
      var link = "https://hyp.is/" + s['id']
      var tags = s['tags'].join().toLowerCase();
      //Add the table graph rows
      data.addRows([
        [new Date(year, month, dateDay), username, textSummary, nodeMsg, textTotal, tags , link , level]
      ]);
      
      //count annotations, replies and total messages per user
      if (!messageTypeCount[username]){
        messageTypeCount[username] = {'totalMessages':0, 'replies':0, 'annotations':0};
        ++messageTypeCount[username]['totalMessages'];
        if (level == 0) {
          ++messageTypeCount[username]['annotations'];
        } else {
          ++messageTypeCount[username]['replies'];
        }
      } else {
        ++messageTypeCount[username]['totalMessages'];
        if (level == 0) {
          ++messageTypeCount[username]['annotations'];
        } else {
          ++messageTypeCount[username]['replies'];
        }
      }
    }
    //console.log(messageTypeCount);
    //Count instances of unique tags
    for (var i = 0; i < tagArray.length; i++) {
      tagCounts[tagArray[i]] = 1 + (tagCounts[tagArray[i]] || 0);
    }
    //Build the rows for the tag table/graph
    for (var t in tagCounts) {
      tagData.addRows([
        [ t, tagCounts[t] ]
      ]);
    }
    tagData.sort({column: 1, desc: true});

    //Build the message type graph
    for (var m in messageTypeCount) {
      messageTypeData.addRows([
        [ m, messageTypeCount[m]['totalMessages'], messageTypeCount[m]['annotations'], messageTypeCount[m]['replies']]
      ]);
    }

    var table = new google.visualization.Table(document.getElementById('table_div'));
    /*
    ** use the chartwrapper here **
    **
    */
    var bar_graph = new google.visualization.ColumnChart(document.getElementById('graph'));
    var calendar = new google.visualization.Calendar(document.getElementById('graph'));
    var opts = {
      width: '100%', height: '100%', page: 'enable', pageSize: 25, legend: { position: 'none' },
      vAxis: { format: '#' }, isStacked: true, colors: ['#243c68', '#e6693e']
    };
    var view = new google.visualization.DataView(data);
    view.hideColumns([3,4,6]);

    var messagesPerUser = google.visualization.data.group(
      data,
      [1], //aggregate annotations by users
      [{'column': 1, 'aggregation': google.visualization.data.count, 'type': 'number',
      'label': 'Contributions'}]
    );
    messagesPerUser.sort({column: 1, desc: true});

    var messagesPerThread = google.visualization.data.group(
      data,
      [3], //aggregate annotations by thread
      [{'column': 1, 'aggregation': google.visualization.data.count, 'type': 'number',
      'label': 'Annotations'}]
    );
    messagesPerThread.sort({column: 1, desc: true});
    messagesPerThread.removeRow(0);

    var messagesPerDay = google.visualization.data.group(
      data,
      [0], //aggregate annotations by day
      [{'column': 0, 'aggregation': google.visualization.data.count, 'type': 'number',
      'label': 'Annotations'}]
    );
    messagesPerDay.sort({column: 1, desc: true});
    //messagesPerDay.removeRow(0);

    //bar_graph.draw(messagesPerUser, opts);
    messageTypeData.sort({column: 1, desc: true});
    viewD = new google.visualization.DataView(messageTypeData);
    viewD.hideColumns([1]);
    bar_graph.draw(viewD, opts);
    table.draw(view, opts);

    //Left nav pill notifications counter 
    $( "#participantCounter" ).text(messagesPerUser.getNumberOfRows());
    $( "#calendarCounter" ).text(messagesPerDay.getNumberOfRows());
    $( "#threadCounter" ).text(messagesPerThread.getNumberOfRows());
    $( "#tagCounter" ).text(Object.keys(tagCounts).length);
    $( "#annotationCounter" ).text(total);

    //create event handler object.
    //to be removed when table is filtered. Then create new event handler object 
    var event = google.visualization.events.addListener(table, 'select', function() {
      var row = table.getSelection()[0].row;
      $('#annotationModalLabel').text(data.getValue(row, 1) + ":");
      $('#annotationModalBody').text(data.getValue(row, 4));
      $('#inContextButton').attr("href", data.getValue(row, 6));
      $('#annotationModal').modal('show');
    });

    //Adjust Calander Graph div height based on number of years with annotations
    var activeYears = data.getColumnRange(0).max.getFullYear() - data.getColumnRange(0).min.getFullYear();
    if ( activeYears == 4 ){
      graphDivHeight = "750px";
    } else if ( activeYears == 3 ){
      graphDivHeight = "600px";
    } else if ( activeYears == 2 ){
      graphDivHeight = "455px";
    } else if ( activeYears == 1 ){
      graphDivHeight = "350px";
    } else {
      graphDivHeight = "250px";
    }

    google.visualization.events.addListener(bar_graph, 'select', function() {
      google.visualization.events.removeListener(event);
      view = new google.visualization.DataView(data);
      view.hideColumns([3,4,6]);
      var row = bar_graph.getSelection()[0].row;
      var name = viewD.getValue(row, 0);
      var r = view.getFilteredRows([{column: 1, value: name}]);
      view.setRows(r);
      table.clearChart();
      table.draw(view, opts);

      var event = google.visualization.events.addListener(table, 'select', function() {
        var row = view.getTableRowIndex(table.getSelection()[0].row);
        $('#annotationModalLabel').text(data.getValue(row, 1) + ":");
        $('#annotationModalBody').text(data.getValue(row, 4));
        $('#inContextButton').attr("href", data.getValue(row, 6));
        $('#annotationModal').modal('show');
      });
    });

    $( "#calendarClick" ).click(function() {
      //make graph div taller to fit three years
      $( "#graph" ).css("height",graphDivHeight);
      $( "#calendarClick" ).attr("class", "nav-link active");
      $( "#contributorsClick" ).attr("class", "nav-link");
      $( "#threadsClick" ).attr("class", "nav-link");
      $( "#tagsClick" ).attr("class", "nav-link");
      $( "#graphLabel" ).text("Annotations per Day");
      calendar = new google.visualization.Calendar(document.getElementById('graph'));
      calendar.draw(messagesPerDay, opts);

    //TODO Filter by day
    });
    $( "#contributorsClick" ).click(function() {
      $( "#graph" ).css("height","300px");
      $( "#calendarClick" ).attr("class", "nav-link");
      $( "#contributorsClick" ).attr("class", "nav-link active");
      $( "#threadsClick" ).attr("class", "nav-link");
      $( "#tagsClick" ).attr("class", "nav-link");
      $( "#graphLabel" ).text("Annotations per Contributor");
      bar_graph = new google.visualization.ColumnChart(document.getElementById('graph'));
      bar_graph.draw(viewD, opts);

      google.visualization.events.addListener(bar_graph, 'select', function() {
        google.visualization.events.removeListener(event);
        view = new google.visualization.DataView(data);
        var row = bar_graph.getSelection()[0].row;
        var name = viewD.getValue(row, 0);
        var r = view.getFilteredRows([{column: 1, value: name}]);
        view.hideColumns([3,4,6]);
        view.setRows(r);
        table.draw(view, opts);

        var event = google.visualization.events.addListener(table, 'select', function() {
          var row = view.getTableRowIndex(table.getSelection()[0].row);
          $('#annotationModalLabel').text(data.getValue(row, 1) + ":");
          $('#annotationModalBody').text(data.getValue(row, 4));
          $('#inContextButton').attr("href", data.getValue(row, 6));
          $('#annotationModal').modal('show');
        });
      });
    });
    $( "#threadsClick" ).click(function() {
      $( "#graph" ).css("height","300px");
      $( "#calendarClick" ).attr("class", "nav-link");
      $( "#contributorsClick" ).attr("class", "nav-link");
      $( "#threadsClick" ).attr("class", "nav-link active");
      $( "#tagsClick" ).attr("class", "nav-link");
      $( "#graphLabel" ).text("Annotations per Thread");
      bar_graph = new google.visualization.ColumnChart(document.getElementById('graph'));
      bar_graph.draw(messagesPerThread, opts);

      google.visualization.events.addListener(bar_graph, 'select', function() {
        view = new google.visualization.DataView(data);
        var row = bar_graph.getSelection()[0].row;
        var name = messagesPerThread.getValue(row, 0);
        var r = view.getFilteredRows([{column: 3, value: name}]);
        view.hideColumns([3,4,6]);
        view.setRows(r);
        table.draw(view, opts);

        var event = google.visualization.events.addListener(table, 'select', function() {
          var row = view.getTableRowIndex(table.getSelection()[0].row);
          $('#annotationModalLabel').text(data.getValue(row, 1) + ":");
          $('#annotationModalBody').text(data.getValue(row, 4));
          $('#inContextButton').attr("href", data.getValue(row, 6));
          $('#annotationModal').modal('show');
        });
      });
    });
    $( "#tagsClick" ).click(function() {
      $( "#graph" ).css("height","300px");
      $( "#calendarClick" ).attr("class", "nav-link");
      $( "#contributorsClick" ).attr("class", "nav-link");
      $( "#threadsClick" ).attr("class", "nav-link");
      $( "#tagsClick" ).attr("class", "nav-link active");
      $( "#graphLabel" ).text("Tags");
      bar_graph = new google.visualization.ColumnChart(document.getElementById('graph'));
      bar_graph.draw(tagData, opts);

      /* TODO: Filter by contains instead of equals
      google.visualization.events.addListener(bar_graph, 'select', function() {
        view = new google.visualization.DataView(data);
        view.hideColumns([3,4]);
        var row = bar_graph.getSelection()[0].row;
        var name = tagData.getValue(row, 0);
        var r = view.getFilteredRows([{column: 3, value: name}]);
        //var r = view.getFilteredRows([{column: 3, test: 
        //  function(value, row, column, table) {
        //    return data.getValue(row, 0).includes(name)
        //  }
        //}]);

        //view.setRows(r);
        //table.draw(view, opts);
      });
      */
    });

    $( "#resetButton" ).click(function() {
      view = new google.visualization.DataView(data);
      view.hideColumns([3,4,6]);
      table.draw(view, opts);
    });

    $( ".month-link" ).click(function(event) {
      let m = event.target.id;
      inactivate();
      $( "#" + m  ).attr("class", "nav-link active");
      params.url = syllabus[m]['url'];
      hlib.hApiSearch(params, processSearchResults, '');
      $("#conversation_summary").html(syllabus[m]['summary']);
    });

    $( "#urlSearch" ).click(function() {
      inactivate();
      $("#conversation_summary").html("");
      var url = $('#urlBar').val();
      if (url == ""){
        $( "#graph" ).html('<h3>Enter valid URL...</h3>');
        return false;
      };
      params.url = url;
      hlib.hApiSearch(params, processSearchResults, '');
    });
  };

  function processSearchResults(annos, replies) {
      let csv = '';
      let json = [];
      let gathered = hlib.gatherAnnotationsByUrl(annos);
      let reversedUrls = reverseChronUrls(gathered.urlUpdates);
      let counter = 0;
      reversedUrls.forEach(function (url) {
          counter++;
          let perUrlId = counter;
          let perUrlCount = 0;
          let idsForUrl = gathered.ids[url];
          idsForUrl.forEach(function (id) {
              perUrlCount++;
              let _replies = hlib.findRepliesForId(id, replies);
              _replies = _replies.map(r => {
                  return hlib.parseAnnotation(r);
              });
              let all = [gathered.annos[id]].concat(_replies.reverse());
              all.forEach(function (anno) {
                  let level = 0;
                  if (anno.refs) {
                      level = anno.refs.length;
                  }
                  if (format === 'html') {
                      worker.postMessage({
                          perUrlId: perUrlId,
                          anno: anno,
                          annoId: anno.id,
                          level: level
                      });
                  }
                  else if (format === 'csv') {
                      let _row = document.createElement('div');
                      _row.innerHTML = hlib.csvRow(level, anno);
                      csv += _row.innerText + '\n';
                  }
                  else if (format === 'json') {
                      anno.text = anno.text.replace(/</g, '&lt;');
                      json.push(anno);
                  }
              });
          });
          if (format === 'html') {
              showUrlResults(counter, 'widget', url, perUrlCount, gathered.titles[url]);
          }
      });
      drawTable(json);
  };

  $("#groupControlSelect").change(function(){
    inactivate();
    let select = document.getElementById('groupControlSelect');
    let selectedString = select.options[select.selectedIndex].value;
    params.group = selectedString;
    //hlib.setSelectedGroup(hlib.getById('groupContainer'));
    //hlib.setSelectedGroup();
    hlib.hApiSearch(params, processSearchResults, '');
  });

});
//hlib
function openSetTokenModal(){
  $('#setTokenModal').modal('show');
};

function inputQuerySelector(query) {
    return document.querySelector(query);
}

function setTokenButton(){
  let _token = inputQuerySelector('#tokenInputBar').value;
  localStorage.setItem('h_token', _token);
  $('#setTokenModal').modal('hide');
  createGroupInputFormModified();
}



let params = {
    user: "",//inputQuerySelector('#userContainer input').value,
    group: "",//"G9d4q3j6"
    url: "",//inputQuerySelector('#urlContainer input').value,
    wildcard_uri: "",//inputQuerySelector('#wildcard_uriContainer input').value,
    tag: "",//inputQuerySelector('#tagContainer input').value,
    any: "",//inputQuerySelector('#anyContainer input').value,
    max: ""//inputQuerySelector('#maxContainer input').value,
};

var format = 'json';

function processSearchResults(annos, replies) {
    let csv = '';
    let json = [];
    let gathered = hlib.gatherAnnotationsByUrl(annos);
    let reversedUrls = reverseChronUrls(gathered.urlUpdates);
    let counter = 0;
    reversedUrls.forEach(function (url) {
        counter++;
        let perUrlId = counter;
        let perUrlCount = 0;
        let idsForUrl = gathered.ids[url];
        idsForUrl.forEach(function (id) {
            perUrlCount++;
            let _replies = hlib.findRepliesForId(id, replies);
            _replies = _replies.map(r => {
                return hlib.parseAnnotation(r);
            });
            let all = [gathered.annos[id]].concat(_replies.reverse());
            all.forEach(function (anno) {
                let level = 0;
                if (anno.refs) {
                    level = anno.refs.length;
                }
                if (format === 'html') {
                    worker.postMessage({
                        perUrlId: perUrlId,
                        anno: anno,
                        annoId: anno.id,
                        level: level
                    });
                }
                else if (format === 'csv') {
                    let _row = document.createElement('div');
                    _row.innerHTML = hlib.csvRow(level, anno);
                    csv += _row.innerText + '\n';
                }
                else if (format === 'json') {
                    anno.text = anno.text.replace(/</g, '&lt;');
                    json.push(anno);
                }
            });
        });
        if (format === 'html') {
            showUrlResults(counter, 'widget', url, perUrlCount, gathered.titles[url]);
        }
    });
    console.log(json);
};

function reverseChronUrls(urlUpdates) {
    var reverseChronUrls = [];
    for (var urlUpdate in urlUpdates) {
        reverseChronUrls.push([urlUpdate, urlUpdates[urlUpdate]]);
    }
    reverseChronUrls.sort(function (a, b) {
        return new Date(b[1]).getTime() - new Date(a[1]).getTime();
    });
    return reverseChronUrls.map(item => item[0]);
};
hlib.getById('groupContainer')
function createGroupInputFormModified(e, selectId) {
    var _selectId = selectId ? selectId : 'groupsList';
    function createGroupSelector(groups, selectId) {
        var currentGroup = getGroup();
        var options = '';
        groups.forEach(function (g) {
            var selected = '';
            if (currentGroup == g.id) {
                selected = 'selected';
            }
            options += "<option " + selected + " value=\"" + g.id + "\">" + g.name + "</option>\n";
        });
        return options;
    }
    var token = getToken();
    var opts = {
        method: 'get',
        url: 'https://hypothes.is/api/profile',
        headers: {},
        params: {}
    };
    opts = hlib.setApiTokenHeaders(opts, token);
    hlib.httpRequest(opts)
        .then(function (data) {
        var _data = data;
        var response = JSON.parse(_data.response);
        let form = createGroupSelector(response.groups);
        let g = document.getElementById("groupControlSelect");
        g.innerHTML = form;
    })["catch"](function (e) {
        console.log(e);
    });
};
function getGroup() {
    var group = getFromUrlParamOrLocalStorage('h_group');
    return group != '' ? group : '__world__';
};
function getToken() {
    return getFromUrlParamOrLocalStorage('h_token');
}

function setLocalStorageFromForm(formId, storageKey) {
    var element = getById(formId);
    localStorage.setItem(storageKey, element.value);
}

function getFromUrlParamOrLocalStorage(key, _default) {
    var value;
    if (value === '') {
        var _value = localStorage.getItem("" + key);
        value = _value ? _value : '';
    }
    if ((!value || value === '') && _default) {
        value = _default;
    }
    if (!value) {
        value = '';
    }
    return value;
}
