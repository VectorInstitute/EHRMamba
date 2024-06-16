// forecasting.js

import { patients, patientEvents } from "./data.js";


// Add tooltip div
const tooltip = d3.select('body').append('div')
    .attr('class', 'tooltip')
    .style('opacity', 0);

// Function to update the event timeline
function updateTimeline(patientId) {
    const svg = d3.select('#event-timeline svg');
    svg.selectAll('*').remove(); // Clear previous content

    const events = patientEvents[patientId];
    const cutoffTime = events.cutoffTime;

    const xScale = d3.scaleLinear()
        .domain([0, d3.max([...events.beforeCutoff, ...events.actual, ...events.predicted], d => d.time)])
        .range([50, 1000]);
    
    const getClassByType = (type) => {
        switch (type) {
            case 'Medication': return 'medication';
            case 'Lab Test': return 'lab-test';
            case 'Procedure': return 'procedure';
            case 'Special Token': return 'special-token';
            default: return '';
        }
    };

    // Time arrow and label
    svg.append('line')
        .attr('class', 'time-arrow')
        .attr('x1', 40)
        .attr('y1', 670)
        .attr('x2', 970)
        .attr('y2', 670)
        .attr('stroke', 'black')
        .attr('marker-end', 'url(#arrow)'); 

    svg.append('text')
        .attr('x', 1015)
        .attr('y', 670)
        .attr('text-anchor', 'end')
        .attr('alignment-baseline', 'middle')
        .text('Time');

    // Define arrow markers
    svg.append('defs').append('marker')
        .attr('id', 'arrow')
        .attr('viewBox', '0 0 10 10')
        .attr('refX', 5)
        .attr('refY', 5)
        .attr('markerWidth', 6)
        .attr('markerHeight', 6)
        .attr('orient', 'auto')
        .append('path')
        .attr('d', 'M 0 0 L 10 5 L 0 10 z')
        .attr('fill', 'black');
    
    // Main line
    svg.append('line')
        .attr('class', 'main-line')
        .attr('x1', 50)
        .attr('y1', 400)
        .attr('x2', xScale(cutoffTime))
        .attr('y2', 400)
        .attr('stroke', 'black');

    // Event rectangles and labels for events before the cutoff time
    svg.selectAll('.event-rect')
        .data(events.beforeCutoff)
        .enter()
        .append('rect')
        .attr('class', 'event-rect')
        .attr('x', d => xScale(d.time) - 10)
        .attr('y', 375)
        .attr('width', 20)
        .attr('height', 50)
        .on('mouseover', function (event, d) {
            tooltip.transition()
                .duration(100)
                .style('opacity', .9);
            
            let tooltipContent = `<div class="tooltip-wrapper">
                                    <div class="tooltip-type">${d.type}</div>
                                    <div class="tooltip-event">${d.event}</div>`;
            if (d.description) {
                tooltipContent += `<div class="tooltip-description">${d.description}</div>`;
            }
            tooltipContent += `</div>`;
            
            tooltip.html(tooltipContent)
                .attr('class', `tooltip ${getClassByType(d.type)}`)
                .style('left', (event.pageX + 5) + 'px')
                .style('top', (event.pageY - 28) + 'px');
        })
        .on('mouseout', function () {
            tooltip.transition()
                .duration(500)
                .style('opacity', 0);
        });

    svg.selectAll('.event-label')
        .data(events.beforeCutoff)
        .enter()
        .append('text')
        .attr('class', 'event-label')
        .attr('x', d => xScale(d.time))
        .attr('y', 360)
        .text(d => d.event);

    // Cutoff line and label
    svg.append('line')
        .attr('class', 'cutoff-line-up')
        .attr('x1', xScale(cutoffTime))
        .attr('y1', 250)
        .attr('x2', xScale(cutoffTime))
        .attr('y2', 400)
        .attr('stroke-dasharray', '4,4');
    
    svg.append('line')
        .attr('class', 'cutoff-line-down')
        .attr('x1', xScale(cutoffTime))
        .attr('y1', 400)
        .attr('x2', xScale(cutoffTime))
        .attr('y2', 550)
        .attr('stroke-dasharray', '4,4');

    svg.append('text')
        .attr('x', xScale(cutoffTime) + 35)
        .attr('y', 403)
        .attr('class', 'cutoff-label')
        .text('Cutoff');

    // Branch up line and actual events
    svg.selectAll('.actual-line')
        .data(events.actual)
        .enter()
        .append('line')
        .attr('class', 'actual-line')
        .attr('x1', xScale(cutoffTime))
        .attr('y1', 250)
        .attr('x2', d => xScale(d.time))
        .attr('y2', 250)
        .attr('marker-end', 'url(#arrow)');

    svg.selectAll('.actual-line-vertical')
        .data(events.actual)
        .enter()
        .append('line')
        .attr('class', 'actual-line-vertical')
        .attr('x1', d => xScale(d.time))
        .attr('y1', 250)
        .attr('x2', d => xScale(d.time))
        .attr('y2', 250);

    svg.selectAll('.actual-rect')
        .data(events.actual)
        .enter()
        .append('rect')
        .attr('class', 'actual-rect')
        .attr('x', d => xScale(d.time) - 10)
        .attr('y', 220)
        .attr('width', 20)
        .attr('height', 60)
        .on('mouseover', function (event, d) {
            tooltip.transition()
                .duration(100)
                .style('opacity', .9);
            
            let tooltipContent = `<div class="tooltip-wrapper">
                                    <div class="tooltip-type">${d.type}</div>
                                    <div class="tooltip-event">${d.event}</div>`;
            if (d.description) {
                tooltipContent += `<div class="tooltip-description">${d.description}</div>`;
            }
            tooltipContent += `</div>`;
            
            tooltip.html(tooltipContent)
                .attr('class', `tooltip ${getClassByType(d.type)}`)
                .style('left', (event.pageX + 5) + 'px')
                .style('top', (event.pageY - 28) + 'px');
        })
        .on('mouseout', function () {
            tooltip.transition()
                .duration(500)
                .style('opacity', 0);
        });

    svg.selectAll('.actual-label')
        .data(events.actual)
        .enter()
        .append('text')
        .attr('class', 'branch-label')
        .attr('x', d => xScale(d.time))
        .attr('y', 210)
        .text(d => d.event);
    
    svg.append('text')
        .attr('x', xScale(cutoffTime) - 10)
        .attr('y', 230)
        .attr('text-anchor', 'middle')
        .attr('class', 'actual-label')
        .text('Actual');

    // Branch down line and predicted events
    svg.selectAll('.predicted-line')
        .data(events.predicted)
        .enter()
        .append('line')
        .attr('class', 'predicted-line')
        .attr('x1', xScale(cutoffTime))
        .attr('y1', 550)
        .attr('x2', d => xScale(d.time))
        .attr('y2', 550)
        .attr('marker-end', 'url(#arrow)');

    svg.selectAll('.predicted-line-vertical')
        .data(events.predicted)
        .enter()
        .append('line')
        .attr('class', 'predicted-line-vertical')
        .attr('x1', d => xScale(d.time))
        .attr('y1', 550)
        .attr('x2', d => xScale(d.time))
        .attr('y2', 520)
        .attr('stroke', 'black');

    svg.selectAll('.predicted-rect')
        .data(events.predicted)
        .enter()
        .append('rect')
        .attr('class', 'predicted-rect')
        .attr('x', d => xScale(d.time) - 10)
        .attr('y', 520)
        .attr('width', 20)
        .attr('height', 60)
        .on('mouseover', function (event, d) {
            tooltip.transition()
                .duration(100)
                .style('opacity', .9);
            
            let tooltipContent = `<div class="tooltip-wrapper">
                                    <div class="tooltip-type">${d.type}</div>
                                    <div class="tooltip-event">${d.event}</div>`;
            if (d.description) {
                tooltipContent += `<div class="tooltip-description">${d.description}</div>`;
            }
            tooltipContent += `</div>`;
            
            tooltip.html(tooltipContent)
                .attr('class', `tooltip ${getClassByType(d.type)}`)
                .style('left', (event.pageX + 5) + 'px')
                .style('top', (event.pageY - 28) + 'px');
        })
        .on('mouseout', function () {
            tooltip.transition()
                .duration(500)
                .style('opacity', 0);
        });

    svg.selectAll('.predicted-label')
        .data(events.predicted)
        .enter()
        .append('text')
        .attr('class', 'branch-label')
        .attr('x', d => xScale(d.time))
        .attr('y', 510)
        .text(d => d.event);
    
    svg.append('text')
        .attr('x', xScale(cutoffTime) - 10)
        .attr('y', 580)
        .attr('class', 'predicted-label')
        .text('Predicted');

    // Add legends
    const legend = svg.append('g')
    .attr('class', 'legend')
    .attr('transform', 'translate(40, 10)');  // Adjust position as needed

    // Add a rectangle around the legend for better visibility
    legend.append('rect')
        .attr('x', -10)
        .attr('y', 5)
        .attr('width', 208)
        .attr('height', 65)
        .attr('fill', 'none')
        .attr('stroke', 'black')
        .attr('stroke-width', 0.6);

    // Legend for actual sequence
    legend.append('rect')
        .attr('x', 0)
        .attr('y', 12)
        .attr('width', 20)
        .attr('height', 20)
        .attr('fill', 'rgb(0, 206, 137)');

    legend.append('text')
        .attr('x', 30)
        .attr('y', 27)
        .text('Actual Sequence');

    // Legend for predicted sequence
    legend.append('rect')
        .attr('x', 0)
        .attr('y', 42)
        .attr('width', 20)
        .attr('height', 20)
        .attr('fill', 'rgb(255, 0, 115)');

    legend.append('text')
        .attr('x', 30)
        .attr('y', 57)
        .text('EHRMamba Predicted');
}

// Initialize the patient list
const patientList = d3.select('#patient-list');
patients.forEach(patient => {
    const listItem = patientList.append('li')
        .text(patient.name)
        .on('click', function() {
            // Remove 'selected' class from all list items
            d3.selectAll('#patient-list li').classed('selected', false);
            // Add 'selected' class to the clicked list item
            d3.select(this).classed('selected', true);
            // Update the timeline with the selected patient ID
            updateTimeline(patient.id);
        });
});

// Initially display events for the first patient
updateTimeline(patients[0].id);
d3.select('#patient-list li').classed('selected', true);
