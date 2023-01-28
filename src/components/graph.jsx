import React, { useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

export default function Graph({ data }) {

	// const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, {name: 'Page A', uv: 600, pv: 2800, amt: 2800}];

	return (
		<>
			<LineChart width={600} height={300} data={data}>
				<Line type="monotone" dataKey="distance" stroke="#8884d8" />
				<CartesianGrid stroke="#ccc" />
				<XAxis dataKey="date" />
				<YAxis />
			</LineChart>
		</>
	);
}
