import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function FAQs() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <section id="faq" className="py-24 bg-[#0F172A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <span className="text-emerald-400 text-sm font-semibold uppercase tracking-widest">
              FAQ
            </span>
            <h2 className="text-4xl font-bold text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-400">
              Everything you need to know about ExpenseFlow
            </p>
          </div>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
             sx={{
                backgroundColor: "#1E293B",
                color: "white",
                borderRadius: "12px",
                boxShadow: "none",
                marginBottom: "16px"
              }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-white" />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
             
            >
              <Typography component="span" sx={{ width: "33%", flexShrink: 0, }}>
                Is ExpenseFlow really free?
              </Typography>
             
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-gray-400" sx={{ fontSize: "14px" }}>
                Yes, ExpenseFlow is completely free to use. We offer a generous free tier that includes all the essential features you need to manage your expenses effectively.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
             sx={{
                backgroundColor: "#1E293B",
                color: "white",
                borderRadius: "12px",
                boxShadow: "none",
                marginBottom: "16px",
                fontSize: "14px"
              }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-white"/>}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
             
            >
              <Typography component="span" sx={{ width: "33%", flexShrink: 0 ,}}>
                How secure is my data?
              </Typography>
             
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-gray-400" sx={{ fontSize: "14px" }}>
                We take data security very seriously. ExpenseFlow uses industry-standard encryption and security practices to protect your data. Your information is stored securely and is never shared with third parties without your consent.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
              sx={{
                backgroundColor: "#1E293B",
                color: "white",
                borderRadius: "12px",
                boxShadow: "none",
                marginBottom: "16px"
              }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-white"/>}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            
            >
              <Typography component="span" sx={{ width: "33%", flexShrink: 0 ,}}>
                Can I access ExpenseFlow on mobile?
              </Typography>
             
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-gray-400" sx={{ fontSize: "14px" }}>
                Absolutely! ExpenseFlow is fully responsive and works seamlessly on mobile devices. You can manage your expenses on the go, whether you're using a smartphone or tablet.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
             sx={{
                backgroundColor: "#1E293B",
                color: "white",
                borderRadius: "12px",
                boxShadow: "none",
                marginBottom: "16px"
              }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-white"/>}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
              
             
            >
              <Typography component="span" sx={{ width: "33%", flexShrink: 0 ,}}>
               Can I export my expense data?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-gray-400" sx={{ fontSize: "14px" }}>
                Yes, you can export your expense data in CSV format. This allows you to analyze your expenses in spreadsheet applications or import them into other financial management tools.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
export default FAQs;