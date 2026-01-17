# IAM User for GitHub Actions
resource "aws_iam_user" "github_actions" {
  name = "github-actions-deployer"
}

# Access Key for GitHub Actions
resource "aws_iam_access_key" "github_actions" {
  user = aws_iam_user.github_actions.name
}

# IAM Policy for S3 access
resource "aws_iam_policy" "s3_deployment" {
  name        = "github-actions-s3-deployment"
  description = "Policy for GitHub Actions to deploy to S3"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "S3BucketAccess"
        Effect = "Allow"
        Action = [
          "s3:GetObject",
          "s3:PutObject",
          "s3:DeleteObject",
          "s3:ListBucket"
        ]
        Resource = [
          aws_s3_bucket.portfolio_site.arn,
          "${aws_s3_bucket.portfolio_site.arn}/*"
        ]
      },
      {
        Sid    = "CreateBucket"
        Effect = "Allow"
        Action = [
          "s3:CreateBucket",
          "s3:GetBucketWebsite",
          "s3:PutBucketWebsite"
        ]
        Resource = aws_s3_bucket.portfolio_site.arn
      }
    ]
  })
}

# Attach policy to user
resource "aws_iam_user_policy_attachment" "github_actions_s3" {
  user       = aws_iam_user.github_actions.name
  policy_arn = aws_iam_policy.s3_deployment.arn
}

# Output credentials (save these securely!)
output "github_actions_access_key_id" {
  value       = aws_iam_access_key.github_actions.id
  description = "Access Key ID for GitHub Actions (add to GitHub secrets as AWS_ACCESS_KEY_ID)"
}

output "github_actions_secret_access_key" {
  value       = aws_iam_access_key.github_actions.secret
  sensitive   = true
  description = "Secret Access Key for GitHub Actions (add to GitHub secrets as AWS_SECRET_ACCESS_KEY)"
}
