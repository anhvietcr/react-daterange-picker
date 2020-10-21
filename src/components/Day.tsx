import * as React from "react";
import {
	IconButton,
	Typography,
	createStyles,
	Theme,
	WithStyles,
	withStyles
} from "@material-ui/core";
import { combine } from "../utils";

interface DayProps extends WithStyles<typeof styles> {
	filled?: boolean;
	outlined?: boolean;
	highlighted?: boolean;
	disabled?: boolean;
	startOfRange?: boolean;
	endOfRange?: boolean;
	onClick?: () => void;
	onHover?: () => void;
	value: number | string;
}

const styles = (theme: Theme) =>
	createStyles({
		leftBorderRadius: {
			borderRadius: "50% 0 0 50%"
		},
		rightBorderRadius: {
			borderRadius: "0 50% 50% 0"
		},
		buttonContainer: {
			display: "flex"
		},
		button: {
			height: 36,
			width: 36,
			padding: 0
		},
		buttonText: {
			lineHeight: 1.6
		},
		outlined: {
			border: `1px solid ${theme.palette.primary.dark}`
		},
		filled: {
			"&:hover": {
				backgroundColor: theme.palette.primary.dark
			},
			backgroundColor: theme.palette.primary.dark
		},
		highlighted: {
			backgroundColor: theme.palette.action.hover
		},
		contrast: {
			color: theme.palette.primary.contrastText
		}
	});

const Day: React.FunctionComponent<DayProps> = props => {
	const { classes } = props;
	return (
		<div
			className={combine(
				"date-container-number",
				classes.buttonContainer,
				props.startOfRange && classes.leftBorderRadius,
				props.endOfRange && classes.rightBorderRadius,
				props.highlighted && "date-highlighted"
			)}>
			<IconButton
				className={combine(
					"date-number",
					classes.button,
					props.outlined && "date-outlined",
					props.filled && "date-highlighted"
				)}
				onClick={props.onClick}
				onMouseOver={props.onHover}>
				<Typography
					color={"default"}
					className={combine(
						classes.buttonText,
						props.filled && "date-contrast"
					)}
					variant="body2">
					{props.value}
				</Typography>
			</IconButton>
		</div>
	);
};

export default withStyles(styles)(Day);
