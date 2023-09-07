/*
CATATAN PENTING:

Ubah setiap nama variable:
- var_tree_ux
- var_hierarchy_ux
- var_select_ux
- var_data_ux
- MyTree_ux
- myTree_ux
- .hierarchy-container-ux

Sesuai keperluan. Gunakan CTRL+H untuk "replace all", pastikan Match Case aktif.
*/



"use strict";

/*jshint esversion: 6 */
(function () {
  'use strict';
}());

let var_tree_ux = d3.tree;
let var_hierarchy_ux = d3.hierarchy;
let var_select_ux = d3.select;
let var_data_ux = {
  "name": "User Experience (UX) Design",
  "children": [

    // =========================================================================================================== //

    {
      "name": "📕 1 Foundations of UX design",
      "children": [
        {
          "name": "👉 1.1 UX Careers",
          "children": [
            { "name": "Interaction designer" },
            { "name": "Visual designer" },
            { "name": "Motion designer" },
            { "name": "VR/AR designer" },
            { "name": "UX researcher" },
            { "name": "UX writer" },
            { "name": "UX program manager" },
            { "name": "UX engineer" },
            { "name": "Conversation designer" },
          ]
        },
        {
          "name": "👉 1.2 Product development life cycle",
          "children": [
            { "name": "Brainstrom" },
            { "name": "Define" },
            { "name": "Design" },
            { "name": "Test" },
            { "name": "Launch" },
          ]
        },
        {
          "name": "👉 1.3 Characteristics of a good UX",
          "children": [
            { "name": "Usable" },
            { "name": "Equitable" },
            { "name": "Enjoyable" },
            { "name": "Useful" },
          ]
        },
        {
          "name": "👉 1.4 Types of companies",
          "children": [
            { "name": "Startups and small business" },
            { "name": "Big companies" },
            { "name": "Design agencies" },
            { "name": "Advertising agencies" },
            { "name": "Freelancers" },
          ]
        },
        {
          "name": "👉 1.5 Design frameworks",
          "children": [
            {
              "name": "User-centered design process",
              "children": [
                { "name": "Understand how the user experiences the product" },
                { "name": "Specify the user’s needs" },
                { "name": "Design solutions to those user problems" },
                { "name": "Evaluate solutions against the user’s needs" },
              ]
            },
            {
              "name": "The five elements of UX design",
              "children": [
                { "name": "Strategy" },
                { "name": "Scope" },
                { "name": "Structure" },
                { "name": "Skeleton" },
                { "name": "Surface" },
              ]
            },
            {
              "name": "Design thinking process 🔥",
              "children": [
                { "name": "Emphatize" },
                { "name": "Define" },
                { "name": "Ideate" },
                { "name": "Prototype" },
                { "name": "Test" },
              ]
            },
            {
              "name": "Think like a designer",
              "children": [
                {
                  "name": "Lean UX",
                  "children": [
                    { "name": "Think" },
                    { "name": "Make" },
                    { "name": "Check" },
                  ]
                },
                {
                  "name": "Double diamond",
                  "children": [
                    { "name": "Discover the problem" },
                    { "name": "Define the problem" },
                    { "name": "Develop solutions for the problems" },
                    { "name": "Deliver the product" },
                  ]
                },
              ]
            },
          ]
        },
        {
          "name": "👉 1.6 Key considerations when designing for various platforms",
          "children": [
            { "name": "Screen size" },
            { "name": "Interaction" },
            { "name": "Content layout" },
            { "name": "Functionality" },
            {
              "name": "The four Cs",
              "children": [
                { "name": "Consistency" },
                { "name": "Continuity" },
                { "name": "Context" },
                { "name": "Complementary" },
              ]
            },
          ]
        },
        {
          "name": "👉 1.7 Globally accessible products",
          "children": [
            {
              "name": "Awareness is everything",
              "children": [
                { "name": "Learn about global user communities and how they use technology" },
                { "name": "Be mindful about representing users inclusively" },
                { "name": "Accommodate different levels of literacy and many different languages" },
                { "name": "Empower your users when it comes to privacy, safety, and security" },
              ]
            },
            {
              "name": "Context matters",
              "children": [
                { "name": "Build great user experiences for modest devices" },
                { "name": "Ensure that your app functions seamlessly in intermittent networks—and when offline" },
                { "name": "Keep usage costs low" },
                { "name": "Treat accessibility settings as critical, not just as a checklist" },
              ]
            },
            {
              "name": "Be inclusive by default",
              "children": [
                { "name": "Consider environmental contrasts like sun and shade" },
                { "name": "Color has meaning—use it wisely" },
                { "name": "Design for various screen conditions and input abilities" },
                { "name": "Go big: Larger tap/touch targets" },
              ]
            },
          ]
        },
        {
          "name": "👉 1.8 Design sprints",
          "children": [
            {
              "name": "Planning",
              "children": [
                { "name": "Scope and structuring" },
                { "name": "Gather research and data" },
                { "name": "Prepare and set the tone" },
                { "name": "Post sprint" },
              ]
            },
            {
              "name": "Methodology",
              "children": [
                { "name": "Understand" },
                { "name": "Define" },
                { "name": "Sketch" },
                { "name": "Decide" },
                { "name": "Prototype" },
                { "name": "Validate" },
              ]
            },
            {
              "name": "Retrospective",
              "children": [
                { "name": "What went well?" },
                { "name": "What can be improved?" },
                { "name": "Lessons learned" },
              ]
            },
          ]
        },
        {
          "name": "👉 1.9 Create a portfolio",
          "children": [
            {
              "name": "Website builder",
              "children": [
                { "name": "Squarespace" },
                { "name": "Webflow" },
                { "name": "Wix" },
                { "name": "Google sites" },
              ]
            },
            {
              "name": "Plan your portfolio website",
              "children": [
                { "name": "Name and personal logo" },
                { "name": "Navigation menu" },
                { "name": "Work samples" },
                { "name": "About me (Interests, experiences, passions)" },
                { "name": "Contact information (Email, resume link, online profiles link: LinkedIn, etc)" },
                { "name": "Color scheme (One primary color and one accent color)" },
              ]
            },
            {
              "name": "Personal branding",
              "children": [
                {
                  "name": "Consistency is key",
                  "children": [
                    { "name": "Oprah Winfrey is strongly associated with inspiration and hope" },
                    { "name": "Sarah Cooper is tied to satirical comedy" },
                    { "name": "Bill Nye is famous for learning science in a fun way" },
                  ]
                },
                {
                  "name": "Develop personal brand",
                  "children": [
                    { "name": "Create a personal logo" },
                    { "name": "Make the most of fonts and colors" },
                    { "name": "Keep your voice consistent" },
                    { "name": "Use graphics, animations, and photography" },
                    { "name": "Be yourself" },
                  ]
                },
              ]
            },
            {
              "name": "Create an online profiles",
              "children": [
                { "name": "Your name" },
                { "name": "Your education, including certificate program" },
                { "name": "Your work experience or interests" },
                { "name": "Your skills & qualifications" },
                { "name": "Outstanding achievements" },
                { "name": "A professional photo of yourself" },
                { "name": "Contact & links to social media profiles" },
              ]
            },
          ]
        },
        {
          "name": "👉 1.10 Networking",
          "children": [
            {
              "name": "Where to meet professionals/mentor?",
              "children": [
                { "name": "Online (LinkedIn, Medium, Dribbble, etc)" },
                { "name": "In person (Lectures, seminars, certificate program, etc)" },
              ]
            },
            {
              "name": "How to reach out?",
              "children": [
                { "name": "Fill out and update your profile" },
                { "name": "Introducte yourself with a personalized message" },
                { "name": "Keep it short" },
                { "name": "Don't ask for a job" },
                { "name": "Be clear about what you want" },
                { "name": "Say thank you" },
              ]
            },
          ]
        },
        {
          "name": "👉 1.11 Impostor syndrome",
          "children": [
            {
              "name": "Effects",
              "children": [
                { "name": "Impostor syndrome is the belief that you’re unskilled, inferior to others, or bad at your job, despite your successes" },
                { "name": "Not applying to jobs unless you meet every requirement" },
                { "name": "Taking on extra work to make sure you’re “doing it all” and to look more capable in front of your peers" },
                { "name": "Not attending networking events or career fairs because you’re nervous or anxious" },
                { "name": "Downplaying your abilities during conversations" },
                { "name": "Shrugging off compliments because you don’t believe them" },
              ]
            },
            {
              "name": "How to manage?",
              "children": [
                { "name": "Acknowledge your thoughts" },
                { "name": "Own your accomplishments" },
                { "name": "Be honest with yourself" },
                { "name": "Have a conversation" },
                { "name": "Wear something that makes you feel confident" },
                { "name": "Help someone else" },
                { "name": "Fake it till you make it" },
                { "name": "Go with a friend" },
                { "name": "Get to know people" },
                { "name": "Know that you're not alone" },
              ]
            },
          ]
        },
      ]
    },

    // =========================================================================================================== //

    {
      "name": "📒 2 UX Design Process: Emphatize, Define, Ideate",
      "children": [
        {
          "name": "👉 2.1 ",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        { "name": "👉 2.2 " },
        { "name": "👉 2.3 " },
        { "name": "👉 2.4 " },
        { "name": "👉 2.5 " },
      ]
    },

    // =========================================================================================================== //

  ]
};

class MyTree_ux {
  constructor() {
    this.connector = function (d) {
      //curved 
      /*return "M" + d.y + "," + d.x +
         "C" + (d.y + d.parent.y) / 2 + "," + d.x +
         " " + (d.y + d.parent.y) / 2 + "," + d.parent.x +
         " " + d.parent.y + "," + d.parent.x;*/
      //straight
      return "M" + d.parent.y + "," + d.parent.x
        + "V" + d.x + "H" + d.y;
    };
    this.collapse = (d) => {
      if (d.children) {
        d._children = d.children;
        d._children.forEach(this.collapse);
        d.children = null;
      }
    };
    this.click = (d) => {
      if (d.children) {
        d._children = d.children;
        d.children = null;
      }
      else {
        d.children = d._children;
        d._children = null;
      }
      this.update(d);
    };
    this.update = (source) => {
      this.width = 800;
      // Compute the new tree layout.
      let nodes = this.var_tree_ux(this.root);
      let nodesSort = [];
      nodes.eachBefore(function (n) {
        nodesSort.push(n);
      });
      this.height = Math.max(500, nodesSort.length * this.barHeight + this.margin.top + this.margin.bottom);
      let links = nodesSort.slice(1);
      // Compute the "layout".
      nodesSort.forEach((n, i) => {
        n.x = i * this.barHeight;
      });
      d3.select('svg').transition()
        .duration(this.duration)
        .attr("height", this.height);
      // Update the nodes…
      let node = this.svg.selectAll('g.node')
        .data(nodesSort, function (d) {
          return d.id || (d.id = ++this.i);
        });
      // Enter any new nodes at the parent's previous position.
      var nodeEnter = node.enter().append('g')
        .attr('class', 'node')
        .attr('transform', function () {
          return 'translate(' + source.y0 + ',' + source.x0 + ')';
        })
        .on('click', this.click);
      nodeEnter.append('circle')
        .attr('r', 1e-6)
        .style('fill', function (d) {
          return d._children ? 'lightsteelblue' : '#fff';
        });
      nodeEnter.append('text')
        .attr('x', function (d) {
          return d.children || d._children ? 10 : 10;
        })
        .attr('dy', '.35em')
        .attr('text-anchor', function (d) {
          return d.children || d._children ? 'start' : 'start';
        })
        .text(function (d) {
          if (d.data.name.length > 200) { // <--⚠️⚠️⚠️Jumlah karakter sebelum di collapse (...)⚠️⚠️⚠️
            return d.data.name.substring(0, 200) + '...'; // <--⚠️⚠️⚠️Jumlah karakter sebelum di collapse (...)⚠️⚠️⚠️
          }
          else {
            return d.data.name;
          }
        })
        .style('fill-opacity', 1e-6);
      nodeEnter.append('svg:title').text(function (d) {
        return d.data.name;
      });
      // Transition nodes to their new position.
      let nodeUpdate = node.merge(nodeEnter)
        .transition()
        .duration(this.duration);
      nodeUpdate
        .attr('transform', function (d) {
          return 'translate(' + d.y + ',' + d.x + ')';
        });
      nodeUpdate.select('circle')
        .attr('r', 4.5)
        .style('fill', function (d) {
          return d._children ? 'lightsteelblue' : '#fff';
        });
      nodeUpdate.select('text')
        .style('fill-opacity', 1);
      // Transition exiting nodes to the parent's new position (and remove the nodes)
      var nodeExit = node.exit().transition()
        .duration(this.duration);
      nodeExit
        .attr('transform', function (d) {
          return 'translate(' + source.y + ',' + source.x + ')';
        })
        .remove();
      nodeExit.select('circle')
        .attr('r', 1e-6);
      nodeExit.select('text')
        .style('fill-opacity', 1e-6);
      // Update the links…
      var link = this.svg.selectAll('path.link')
        .data(links, function (d) {
          // return d.target.id;
          var id = d.id + '->' + d.parent.id;
          return id;
        });
      // Enter any new links at the parent's previous position.
      let linkEnter = link.enter().insert('path', 'g')
        .attr('class', 'link')
        .attr('d', (d) => {
          var o = { x: source.x0, y: source.y0, parent: { x: source.x0, y: source.y0 } };
          return this.connector(o);
        });
      // Transition links to their new position.
      link.merge(linkEnter).transition()
        .duration(this.duration)
        .attr('d', this.connector);
      // // Transition exiting nodes to the parent's new position.
      link.exit().transition()
        .duration(this.duration)
        .attr('d', (d) => {
          var o = { x: source.x, y: source.y, parent: { x: source.x, y: source.y } };
          return this.connector(o);
        })
        .remove();
      // Stash the old positions for transition.
      nodesSort.forEach(function (d) {
        d.x0 = d.x;
        d.y0 = d.y;
      });
    };
  }
  $onInit() {
    this.margin = { top: 20, right: 10, bottom: 20, left: 10 };
    this.width = 1400 - this.margin.right - this.margin.left;
    this.height = 800 - this.margin.top - this.margin.bottom;
    this.barHeight = 20;
    this.barWidth = this.width * .8;
    this.i = 0;
    this.duration = 750;
    this.var_tree_ux = var_tree_ux().size([this.width, this.height]);
    // this.tree = tree().nodeSize([0, 30]);
    this.var_tree_ux = var_tree_ux().nodeSize([0, 30]);
    this.root = this.var_tree_ux(var_hierarchy_ux(var_data_ux));
    this.root.each((d) => {
      d.name = d.id; //transferring name to a name variable
      d.id = this.i; //Assigning numerical Ids
      this.i++;
    });
    this.root.x0 = this.root.x;
    this.root.y0 = this.root.y;
    this.svg = var_select_ux('.hierarchy-container-ux').append('svg')
      .attr('width', this.width + this.margin.right + this.margin.left)
      .attr('height', this.height + this.margin.top + this.margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
    // this.root.children.forEach(this.collapse);
    this.update(this.root);
  }
}
;
let myTree_ux = new MyTree_ux();
myTree_ux.$onInit();