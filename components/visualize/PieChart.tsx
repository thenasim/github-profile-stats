import React from "react";
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { Text } from "@visx/text";
import type { ProvidedProps } from "@visx/shape/lib/shapes/Pie";
import { getRandomColor } from "utils/getRandomColor";

export interface PieData {
  label: string;
  data: number;
  color?: string;
}

interface Props {
  width: number;
  height: number;
  data: PieData[];
}

interface PieItemProps {
  pie: ProvidedProps<PieData>;
}

export const PieChart: React.FC<Props> = ({ width, height, data }) => {
  const half = width / 2;
  const pieValue = (d: PieData) => d.data;

  return (
    <svg width={width} height={height}>
      <Group top={half} left={half}>
        <Pie
          data={data}
          pieValue={pieValue}
          outerRadius={half}
          innerRadius={half - half / 4}
          cornerRadius={3}
          padAngle={0.005}
        >
          {(pie) => <PieItem pie={pie} />}
        </Pie>
      </Group>
    </svg>
  );
};

const PieItem: React.FC<PieItemProps> = ({ pie }) => {
  return (
    <>
      {pie.arcs.map((arc, i) => {
        const [centroidX, centroidY] = pie.path.centroid(arc);
        const d = pie.path(arc) || undefined;

        return (
          <Group key={i}>
            <g>
              <path d={d} fill={getRandomColor()}></path>
            </g>
            <Text
              fill="white"
              x={centroidX}
              y={centroidY}
              dy=".33em"
              fontSize={15}
              textAnchor="middle"
              pointerEvents="none"
            >
              {arc.data.label}
            </Text>
          </Group>
        );
      })}
    </>
  );
};
