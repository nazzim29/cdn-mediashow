var script = document.createElement("script");
script.onload = function () {
	//do stuff with the script7
    <% for( let widget of scenario.widgets ){%>
    <% let i = scenario.widgets.indexOf(widget) %>
    const widget<%= i%> = new ChatWall({
        nextDisplay: <%= widget.settings.nextDisplay || 0 %>,
        displayAfter: <%= widget.settings.displayAfter ||0 %>,
        displayTimeout: <%= widget.settings.displayTimeout || 0 %>,
        urlBtn1: "<%= widget.urlBtn1 %>",
        urlBtn2: "<%= widget.urlBtn2 %>",
        templateUsed: [{ name: "<%=widget.template%>", type: "<%=widget.type%>" }],
        scenario: "<%=scenario.uuid%>",
        demo: <%=scenario.demo %>
	});
    <%if(i > 0 ){ %>
    widget<%=i-1%>.setNext(widget<%=i%>)
    <% } %>
    <%}%>
    <%if(scenario.widgets.length >0){%>
    widget0.launch()
    <%}%>
};
script.src = "<%= staticIndexUrl %>" ;

document.head.appendChild(script); //or something of the likes
