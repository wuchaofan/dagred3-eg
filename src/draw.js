import 'script-loader!d3/d3.min.js';
import 'script-loader!dagre/dist/dagre.min.js';
import 'script-loader!dagre-d3/dist/dagre-d3.min.js';

class DataSet{
    // datalist = [{id: 'c', data:{}}]
    constructor(dataconfig){
        var g = new dagreD3.graphlib.Graph({compound:true})
        .setGraph({rankdir: 'LR'})
        .setDefaultEdgeLabel(function() { return {}; });

        dataconfig.nodes.forEach((item) => {
            g.setNode(item.id, item.data);
            g.setParent(item.id, item.pid);
        })
        dataconfig.edges.forEach((item) => {
            g.setEdge(item.from, item.to);
        })

        g.nodes().forEach(function(v) {
            var node = g.node(v);
            // Round the corners of the nodes
            node.rx = node.ry = 5;
        });
         
        // Create the renderer
        var render = new dagreD3.render();

        // Set up an SVG group so that we can translate the final graph.
        var svg = d3.select("svg"),
        svgGroup = svg.append("g");

        // Run the renderer. This is what draws the final graph.
        render(d3.select("svg g"), g);

        // Center the graph
        var xCenterOffset = (svg.attr("width") - g.graph().width) / 2;
        svgGroup.attr("transform", "translate(" + xCenterOffset + ", 20)");
        svg.attr("height", g.graph().height + 40);
    }
}
export default  DataSet