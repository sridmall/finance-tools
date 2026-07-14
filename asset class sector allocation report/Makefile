PYTHON := python3
SCRIPT := assetclass_sector_allocation_report.py
REPORT := assetclass_sector_allocation_report.md
REQUIREMENTS := requirements.txt

.PHONY: generateAssetClassSectorAllocationReport install help

generateAssetClassSectorAllocationReport: ## Generate the asset class & sector allocation report
	@echo "Checking dependencies..."
	@$(PYTHON) -c "import openpyxl" 2>/dev/null || (echo "Installing missing dependencies..." && pip3 install -r $(REQUIREMENTS) --quiet)
	@echo "Running report generator..."
	@$(PYTHON) $(SCRIPT)
	@echo "Report saved to: $(REPORT)"

install: ## Install Python dependencies from requirements.txt
	pip3 install -r $(REQUIREMENTS)

help: ## Show available make targets
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-45s\033[0m %s\n", $$1, $$2}'

.DEFAULT_GOAL := help
