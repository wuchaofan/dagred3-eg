import DataSet from './draw'
import './style.css'


const datalist = {
    nodes: [
        {id: 'group1', data: {label: 'group1', clusterLabelPos: 'bottom', style: 'fill: #ffd47f'}},
        {id: 'group2', data: {label: 'group2', clusterLabelPos: 'bottom', style: 'fill: #5f9488'}},
        
        {id: 'a', data: {label: 'A'}, pid: 'group1'},
        {id: 'b', data: {label: 'B'}, pid: 'group1'},
        {id: 'c', data: {label: 'C'}, pid: 'group1'},
        {id: 'd', data: {label: 'D'}, pid: 'group1'},
        
        {id: 'e', data: {label: 'E'}, pid: 'group2'},
        {id: 'f', data: {label: 'F'}, pid: 'group2'},
        {id: 'g', data: {label: 'G'}, pid: 'group2'},
        {id: 'h', data: {label: 'H'}, pid: 'group2'}
    ],
    edges: [
        {from: 'a', to: 'e'},
        {from: 'd', to: 'e'},
        {from: 'b', to: 'f'},
        {from: 'c', to: 'g'},
        {from: 'b', to: 'h'},
    ]
}

new DataSet(datalist)
