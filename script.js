$(document).ready(function () {
    const originalPost = { displayName: 'WhySoSerious', text: 'Trying to decide a career path? Programming is the move. Change my mind.' };
    const comments = [
        { displayName: 'DonTrumpet', text: 'Walls are great' },
        { displayName: 'Obamajama', text: 'Trumpet go brr' },
    ];

    function displayComments() {
        $('#comments-container').empty();

        comments.forEach((comment, index) => {
            const commentDiv = $('<div>').addClass('comment');
            const profilePicture = $('<img>').attr('src', 'icon.jpg').attr('alt', 'Profile Picture');
            const commentContent = $('<div>').addClass('comment-content');
            const commentText = $('<p>').text(comment.text);
            const displayName = $('<strong>').text(comment.displayName);
            const editButton = $('<button>').text('Edit').click(() => editComment(index));
            const deleteButton = $('<button>').text('Delete').click(() => deleteComment(index));
            const commentOptions = $('<div>').addClass('comment-options').append(editButton, deleteButton);
            commentContent.append(displayName, commentText, commentOptions);
            commentDiv.append(profilePicture, commentContent);
            $('#comments-container').append(commentDiv);
        });
    }

    $('#post-comment').click(function () {
        const displayName = $('#display-name').val();
        const commentText = $('#comment-text').val();
        if (displayName && commentText) {
            comments.unshift({ displayName, text: commentText });
            displayComments();
            $('#display-name').val('');
            $('#comment-text').val('');
        }
    });

    function deleteComment(index) {
        comments.splice(index, 1);
        displayComments();
    }

    function editComment(index) {
        const newText = prompt('Edit your comment:', comments[index].text);
        if (newText !== null) {
            comments[index].text = newText;
            displayComments();
        }
    }

    displayComments();

    $(window).scroll(function () {
        const originalPostHeight = $('#original-post').outerHeight();
        const scrolled = $(this).scrollTop();
        if (scrolled >= originalPostHeight) {
            $('#original-post').addClass('fixed');
        } else {
            $('#original-post').removeClass('fixed');
        }
    });
});
