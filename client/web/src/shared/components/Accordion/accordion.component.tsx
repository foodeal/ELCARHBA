import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface ControlledAccordionProps {
  title?: string | React.ReactNode;
  content?: string | React.ReactNode;
  summary?: string | React.ReactNode;
  open?: boolean;
}

export const ControlledAccordion = ({
  title,
  content,
  summary,
  open = false
}: ControlledAccordionProps) => {
  const [expanded, setExpanded] = React.useState<boolean>(open);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion
      expanded={expanded}
      onChange={handleChange}
      style={{ margin: 0, backgroundColor: "#f6f6f6" }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        {title && <Typography>{title}</Typography>}
        {summary && (
          <Typography sx={{ color: "text.secondary" }}>{summary}</Typography>
        )}
      </AccordionSummary>
      <AccordionDetails>{content}</AccordionDetails>
    </Accordion>
  );
};
