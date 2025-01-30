import markdown2
from weasyprint import HTML, CSS
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)

# Input and output files
markdown_file = "predictive_maintenance.md"
output_pdf = "predictive_maintenance.pdf"

try:
    # Read markdown content
    with open(markdown_file, 'r', encoding='utf-8') as f:
        markdown_content = f.read()

    # Convert markdown to HTML
    html_content = markdown2.markdown(
        markdown_content,
        extras=['fenced-code-blocks', 'tables', 'header-ids']
    )

    # Add HTML wrapper and CSS
    html_doc = f'''
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <style>
            body {{ font-family: -apple-system, BlinkMacSystemFont, sans-serif; }}
            code {{ background: #f4f4f4; padding: 2px 5px; border-radius: 3px; }}
            pre {{ background: #f4f4f4; padding: 15px; border-radius: 5px; }}
            img {{ max-width: 100%; }}
            table {{ border-collapse: collapse; width: 100%; }}
            th, td {{ border: 1px solid #ddd; padding: 8px; }}
        </style>
    </head>
    <body>
        {html_content}
    </body>
    </html>
    '''

    # Generate PDF
    HTML(string=html_doc).write_pdf(
        output_pdf,
        stylesheets=[CSS(string='@page { margin: 1cm }')]
    )

    print(f"PDF saved as {output_pdf}")
except FileNotFoundError:
    logging.error(f"Markdown file not found: {markdown_file}")
except Exception as e:
    logging.error(f"Failed to generate PDF: {e}")