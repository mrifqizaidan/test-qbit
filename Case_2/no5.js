const comments = [
    {
      commentId: 1,
      commentContent: 'Hai',
      replies: [
        {
          commentId: 11,
          commentContent: 'Hai juga',
          replies: [
            {
              commentId: 111,
              commentContent: 'Haai juga hai jugaa',
            },
            {
              commentId: 112,
              commentContent: 'Haai juga hai jugaa',
            },
          ],
        },
        {
          commentId: 12,
          commentContent: 'Hai juga',
          replies: [
            {
              commentId: 121,
              commentContent: 'Haai juga hai jugaa',
            },
          ],
        },
      ],
    },
    {
      commentId: 2,
      commentContent: 'Halooo',
    },
  ];
  
  function countComments(comments) {
    let totalCount = comments.length;
    for (const comment of comments) {
      if (comment.replies) {
        totalCount += countComments(comment.replies);
      }
    }
    return totalCount;
  }
  
  const totalComments = countComments(comments);
  console.log('Total komentar adalah', totalComments, 'komentar.');
  