/*
CATATAN PENTING:

Ubah setiap nama variable:
- var_tree_academic_general
- var_hierarchy_academic_general
- var_select_academic_general
- var_data_academic_general
- MyTree_academic_general
- myTree_academic_general
- .hierarchy-container-academic-general

Sesuai keperluan. Gunakan CTRL+H untuk "replace all", pastikan Match Case aktif.
*/



"use strict";

/*jshint esversion: 6 */
(function () {
  'use strict';
}());

let var_tree_academic_general = d3.tree;
let var_hierarchy_academic_general = d3.hierarchy;
let var_select_academic_general = d3.select;
let var_data_academic_general = {
  "name": "Outline of Acedemic Disciplines",
  "children": [
    {
      "name": "📕 1 Humanities",
      "children": [
        { "name": "👉 1.1 Performing arts" },
        { "name": "👉 1.2 Visual arts" },
        { "name": "👉 1.3 History" },
        { "name": "👉 1.4 Languages and literature" },
        { "name": "👉 1.5 Law" },
        { "name": "👉 1.6 Philosophy" },
        { "name": "👉 1.7 Theology" },
      ]
    },
    {
      "name": "📒 2 Social science",
      "children": [
        { "name": "👉 2.1 Anthropology" },
        { "name": "👉 2.2 Archaeology" },
        { "name": "👉 2.3 Economics" },
        { "name": "👉 2.4 Geography" },
        { "name": "👉 2.5 Political science" },
        { "name": "👉 2.6 Psychology" },
        { "name": "👉 2.7 Sociology" },
        { "name": "👉 2.8 Social work" },
      ]
    },
    {
      "name": "📗 3 Natural science",
      "children": [
        { "name": "👉 3.1 Biology" },
        { "name": "👉 3.2 Chemistry" },
        { "name": "👉 3.3 Earth science" },
        { "name": "👉 3.4 Space science" },
        { "name": "👉 3.5 Physics" },
      ]
    },
    {
      "name": "📘 4 Formal science",
      "children": [
        { "name": "👉 4.1 Computer science" },
        { "name": "👉 4.2 Mathematics" },
      ]
    },
    {
      "name": "📙 5 Applied science",
      "children": [
        { "name": "👉 5.1 Agriculture" },
        { "name": "👉 5.2 Architecture and design" },
        { "name": "👉 5.3 Business" },
        { "name": "👉 5.4 Divinity" },
        { "name": "👉 5.5 Education" },
        { "name": "👉 5.6 Engineering and technology" },
        { "name": "👉 5.7 Environmental studies and forestry" },
        { "name": "👉 5.8 Family and consumer science" },
        { "name": "👉 5.9 Human physical performance and recreation" },
        { "name": "👉 5.10 Journalism, media studies and communication" },
        { "name": "👉 5.11 Law" },
        { "name": "👉 5.12 Library and museum studies" },
        { "name": "👉 5.13 Medicine and health" },
        { "name": "👉 5.14 Military sciences" },
        { "name": "👉 5.15 Public administration" },
        { "name": "👉 5.16 Social work" },
        { "name": "👉 5.17 Transportation" },
      ]
    },
  ]
};

class MyTree_academic_general {
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
      let nodes = this.var_tree_academic_general(this.root);
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
          if (d.data.name.length > 100) { // <--⚠️⚠️⚠️Jumlah karakter sebelum di collapse (...)⚠️⚠️⚠️
            return d.data.name.substring(0, 100) + '...'; // <--⚠️⚠️⚠️Jumlah karakter sebelum di collapse (...)⚠️⚠️⚠️
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
    this.var_tree_academic_general = var_tree_academic_general().size([this.width, this.height]);
    // this.tree = tree().nodeSize([0, 30]);
    this.var_tree_academic_general = var_tree_academic_general().nodeSize([0, 30]);
    this.root = this.var_tree_academic_general(var_hierarchy_academic_general(var_data_academic_general));
    this.root.each((d) => {
      d.name = d.id; //transferring name to a name variable
      d.id = this.i; //Assigning numerical Ids
      this.i++;
    });
    this.root.x0 = this.root.x;
    this.root.y0 = this.root.y;
    this.svg = var_select_academic_general('.hierarchy-container-academic-general').append('svg')
      .attr('width', this.width + this.margin.right + this.margin.left)
      .attr('height', this.height + this.margin.top + this.margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
    // this.root.children.forEach(this.collapse);
    this.update(this.root);
  }
}
;
let myTree_academic_general = new MyTree_academic_general();
myTree_academic_general.$onInit();