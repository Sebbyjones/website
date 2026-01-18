# Pipeline user for CI/CD deployments
resource "aws_iam_user" "pipeline" {
  name = "pipeline-user"
}

# Access key for pipeline user
resource "aws_iam_access_key" "pipeline" {
  user = aws_iam_user.pipeline.name
}

# Policy with all permissions needed for deployments
resource "aws_iam_policy" "pipeline_policy" {
  name        = "pipeline-deployment-policy"
  description = "Policy for pipeline deployments - S3 and Terraform management"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "S3FullAccess"
        Effect = "Allow"
        Action = [
          "s3:*"
        ]
        Resource = "*"
      },
      {
        Sid    = "CloudFrontAccess"
        Effect = "Allow"
        Action = [
          "cloudfront:CreateInvalidation"
        ]
        Resource = "*"
      }
    ]
  })
}

# Attach policy to pipeline user
resource "aws_iam_user_policy_attachment" "pipeline" {
  user       = aws_iam_user.pipeline.name
  policy_arn = aws_iam_policy.pipeline_policy.arn
}

# Output credentials
output "pipeline_user_access_key_id" {
  value       = aws_iam_access_key.pipeline.id
  description = "Access Key ID for pipeline user"
}

output "pipeline_user_secret_access_key" {
  value       = aws_iam_access_key.pipeline.secret
  sensitive   = true
  description = "Secret Access Key for pipeline user"
}
