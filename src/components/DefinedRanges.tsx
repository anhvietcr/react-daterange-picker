import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { DefinedRange, DateRange } from "../types";
import { isSameDay } from "date-fns";
import { combine } from "../utils";

type DefinedRangesProps = {
	setRange: (range: DateRange) => void;
	selectedRange: DateRange;
	ranges: DefinedRange[];
};

const isSameRange = (first: DateRange, second: DateRange) => {
	const { startDate: fStart, endDate: fEnd } = first;
	const { startDate: sStart, endDate: sEnd } = second;
	if (fStart && sStart && fEnd && sEnd) {
		return isSameDay(fStart, sStart) && isSameDay(fEnd, sEnd);
	}
	return false;
};

const DefinedRanges: React.FunctionComponent<DefinedRangesProps> = props => {
	return (
		<List>
			{props.ranges.map((range, idx) => (
				<ListItem className="date-list-item" button key={idx} onClick={() => props.setRange(range)}>
					<ListItemText
						className={combine(isSameRange(range, props.selectedRange) && "date-range-selected")}
						primaryTypographyProps={{
							variant: "body2",
							style: {
								fontWeight: isSameRange(range, props.selectedRange)
									? "bold"
									: "normal"
							}
						}}>
						{range.label}
					</ListItemText>
				</ListItem>
			))}
		</List>
	);
};

export default DefinedRanges;
