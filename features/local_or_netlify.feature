Feature: Local or Netlify
  Detect if a site is viewed either locally or on Netlify

  Scenario: Localhost should be determined as running locally
    Given the URL contains file or localhost
    When the function determaining if its viewed locally
    Then it should conclude that the site is viewed locally

  Scenario: Netlify should be determined as running on Netlify
    Given the URL contains Netlify
    When the function determaining if its viewed on Netlify
    Then it should conclude that the site is viewed on Netlify

  Scenario: Gibberish should be determined as an error
    Given the URL contains gibberish
    When the function determaining if its viewed either on Netlify or local
    Then it should conclude that it's none of those, and result in an error