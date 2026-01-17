resource "aws_iam_user" "current_user" {
  name = "Sebbyjones"
}

# Policy to manage S3 and IAM
resource "aws_iam_policy" "current_user_admin" {
  name        = "sebbyjones-admin-policy"
  description = "Policy to manage S3, IAM, and Terraform"

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
        Sid    = "IAMAccess"
        Effect = "Allow"
        Action = [
          "iam:CreateUser",
          "iam:DeleteUser",
          "iam:GetUser",
          "iam:ListUsers",
          "iam:CreateAccessKey",
          "iam:DeleteAccessKey",
          "iam:ListAccessKeys",
          "iam:CreatePolicy",
          "iam:DeletePolicy",
          "iam:GetPolicy",
          "iam:ListPolicies",
          "iam:AttachUserPolicy",
          "iam:DetachUserPolicy",
          "iam:ListAttachedUserPolicies",
          "iam:ListUserPolicies"
        ]
        Resource = "*"
      }
    ]
  })
}

# Attach admin policy to current user
resource "aws_iam_user_policy_attachment" "current_user_admin" {
  user       = aws_iam_user.current_user.name
  policy_arn = aws_iam_policy.current_user_admin.arn
}