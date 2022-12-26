$(document).ready(() => {
  const form = $('#form');
  const input = $('#input');
  const resultsContainer = $('#results');
  const showAllButton = $('#show-all');

  let response;

  form.submit((event) => {
    event.preventDefault();
    const statement = input.val();

    // Make the AJAX request
    $.ajax({
      type: 'POST',
      url: 'https://Fallacy-Classification.kyutifer.repl.co/classify',
      data: {
        'statement' : statement
      },
      success: (res) => {
        response = res;
        displayResults(response, 3);
        showAllButton.show();
      },
      error: () => {
        // Error: display an error message
        resultsContainer.html('An error occurred while processing the request');
      }
    });
  });

  showAllButton.click(() => {
    displayResults(response, 14);
    showAllButton.hide();
  });

  function displayResults(results, numResults) {
    // Clear the previous results
    resultsContainer.html('');
  
    // Display the top numResults results
    for (let i = 0; i < numResults; i++) {
      const result = results[i];
      const percent = (result.score * 100).toFixed(2);
      const div = $('<div>').addClass('result').html(`
        <span class="label">${result.label}</span>: <span class="score">${percent}%</span>
      `);
      div.click(() => {
        showModal(result.label);
        closeModal();
      });
      resultsContainer.append(div);
    }
  }

  function showModal(label) {
  
    // Retrieve the information from the API endpoint
    $.ajax({
      type: 'GET',
      url: 'https://Fallacy-Classification.kyutifer.repl.co/get_info',
      success: (info) => {
        console.log(info);
        const fallacyInfo = info[label];
        $('#modal-label').text(label);
        $('#modal-definition').text(fallacyInfo.definition);
        $('#modal-example').text(fallacyInfo.example);
        $('#modal').show();
      }
    });
  }

  function closeModal() {
    // Hide the modal when the close button is clicked
    $('#modal-close').click(() => {
      $('#modal').hide();
      $('#modal-label').text("");
      $('#modal-definition').text("");
      $('#modal-example').text("");
    });
  
    // Hide the modal when the user clicks outside the modal
    $(window).click((event) => {
      if (event.target.id === 'modal') {
        $('#modal').hide();
        $('#modal-label').text("");
        $('#modal-definition').text("");
        $('#modal-example').text("");
      }
    });
  }
  
});