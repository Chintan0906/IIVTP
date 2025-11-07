from selenium import webdriver

driver = webdriver.Chrome()

# Correct path and file:// format
driver.get(r"file:///C:/IIVTP/registrattion.html")

print("Browser is open. Close it manually when you're done testing.")

# Keeps session alive
input("Press ENTER here in the console to quit...\n")

driver.quit()
